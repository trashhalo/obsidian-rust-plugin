import { Notice, Plugin } from 'obsidian';
import rustPlugin from "./pkg/obsidian_rust_plugin_bg.wasm";
import init from "./pkg/obsidian_rust_plugin.js";

export default class RustPlugin extends Plugin {
	async onload() {
		const buffer = Uint8Array.from(atob(rustPlugin), c => c.charCodeAt(0))
		this.plugin = await init(Promise.resolve(buffer));
		this.addCommand({
			id: "example",
			name: "Example",
			callback: () => this.example()
		});
	}

	example() {
		new Notice(`rust says ${this.plugin.add(24, 24)}`)
	}
}
