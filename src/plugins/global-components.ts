import type { App } from 'vue'

// Automatically import all Vue components inside the `components` folder
export default function registerGlobalComponents(app: App) {
  const components: Record<string, { default: { name: string } }> = import.meta.glob(
    '@/components/**/*.vue',
    { eager: true },
  )

  for (const path in components) {
    const component = components[path]?.default
    if (component?.name) {
      app.component(component.name, component)
    }
  }
}
