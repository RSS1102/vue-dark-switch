import 'uno.css'

export { default as Switch } from './components/switch.vue'
export { default as SwitchIcon } from './components/switch-icon.vue'

export {
	isDark,
	naiveTheme,
	toggleDark
} from './composables/theme'
export {
	mountStyle,
	mountScript,
	mountPresets
} from './composables/mount'
