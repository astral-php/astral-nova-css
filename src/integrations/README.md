# Integrations

Place optional ecosystem adapters here. They must not be imported by the core entry point unless the consumer explicitly selects them.

- `tailwind-v3/`: planned preset bridge.
- `tailwind-v4/`: planned CSS-first bridge.
- `bootstrap/`: planned for a later release, initially targeting stable Bootstrap 5.x.

An adapter may map Nova tokens to upstream theme variables, document class coexistence, or provide utility configuration. It must not create a runtime dependency from Nova core to the upstream framework.
