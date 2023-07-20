# Benchmark Welcome-UI (xstyled vs PandaCSS)

> we can't use "Next's App Router" because of useState usage in Welcome-UI codebase

### Script:

- SSR
- Render 10000 Box
- Render 10000 Text with random variant
- Render 10000 Button with random variant

### Results:

#### Panda

![PandaCSS](/bench-panda.png)

#### xstyled

![xstyled](/bench-xstyled.png)
