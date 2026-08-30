# Wanderatlas

Interaktive Weltkarte. Länder antippen, «Ich war hier» setzen — Abdeckung oben und je Kontinent.

## Container-Image

```
ghcr.io/bpms9cmnxc-debug/wanderatlas:latest
```

Nach dem ersten Push baut GitHub Actions das Image und legt es unter **Packages** ab.

```bash
docker pull ghcr.io/bpms9cmnxc-debug/wanderatlas:latest
docker run --rm -p 8080:80 ghcr.io/bpms9cmnxc-debug/wanderatlas:latest
```

Dann im Browser öffnen.

## Mac (Apple Silicon)

Unter [Releases](https://github.com/bpms9cmnxc-debug/wanderatlas/releases) das Zip laden, entpacken, `Wanderatlas.app` **rechtsklicken → Öffnen**.

macOS 13 oder neuer, Apple-Chip. Einmalig bestätigen — die App ist nicht von Apple notariell beglaubigt.
