import { build } from "vite"
import path from "path"
import { fileURLToPath } from "url"
import fs from "fs-extra"

import { list_functions, updatePackageJSON } from "./utils.mjs"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const DIR_ROOT = path.resolve(__dirname, "../")
const DIR_SRC = path.resolve(DIR_ROOT, "src")

async function run() {
	const functions = await list_functions(DIR_SRC)

	const modules = Object.keys(functions)

	const libraries = []

	const pkgExports = {
		".": {
			import: "./dist/index.js",
			require: "./dist/index.cjs",
		},
		"./*": "./*",
	}

	for (const module of modules) {
		const modulePath = path.join(DIR_SRC, module === "index" ? "" : module)

		const moduleFunctions = functions[module]

		const imports = []

		moduleFunctions.map((f) => {
			imports.push(`export * from './${f.name}'`)
		})

		await fs.writeFile(
			path.join(modulePath, "index.ts"),
			`${imports.join("\n")}\n`
		)

		if (module === "index") {
			libraries.push({
				entry: path.resolve(__dirname, "../src/index.ts"),
				fileName: "index",
			})
		} else {
			libraries.push({
				entry: path.resolve(__dirname, `../src/${module}/index.ts`),
				fileName: module,
			})

			pkgExports[`./${module}`] = {
				import: `./dist/${module}.js`,
				require: `./dist/${module}.cjs`,
			}
		}
	}

	libraries.forEach(async (lib) => {
		await build({
			build: {
				outDir: "./dist",
				lib: {
					...lib,
					formats: ["es", "cjs"],
				},
				emptyOutDir: false,
			},
		})
	})

	await updatePackageJSON(pkgExports)
}

run()
