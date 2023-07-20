import Document, { DocumentContext } from "next/document";
import { ServerStyleSheet } from "@xstyled/styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    if (ctx.pathname !== "/xstyled") {
      const initialProps = await Document.getInitialProps(ctx);
      return initialProps;
    }

    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceComponent: (Component) => (props) => {
            return sheet.collectStyles(<Component {...props} />);
          },
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
