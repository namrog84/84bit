import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

// import * as React from "react";

// import Layout from "../components/layout";
// import Seo from "../components/seo";
// import { graphql } from "gatsby";

// const NotFoundPage = ({ data, location }) => {
//   const siteTitle = data.site.siteMetadata.title;

//   return (
//     <Layout location={location} title={siteTitle}>
//       <Seo title="404: Not Found" />
//       <h1>404: Not Found</h1>
//       <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
//     </Layout>
//   );
// };

// // // styles
// // const pageStyles = {
// //   color: "#232129",
// //   padding: "96px",
// //   fontFamily: "-apple-system, Roboto, sans-serif, serif",
// // }
// // const headingStyles = {
// //   marginTop: 0,
// //   marginBottom: 64,
// //   maxWidth: 320,
// // }

// // const paragraphStyles = {
// //   marginBottom: 48,
// // }
// // const codeStyles = {
// //   color: "#8A6534",
// //   padding: 4,
// //   backgroundColor: "#FFF4DB",
// //   fontSize: "1.25rem",
// //   borderRadius: 4,
// // }

// // // markup
// // const NotFoundPage = () => {
// //   return (
// //     <main style={pageStyles}>
// //       <title>Not found</title>
// //       <h1 style={headingStyles}>Page not found</h1>
// //       <p style={paragraphStyles}>
// //         Sorry{" "}
// //         <span role="img" aria-label="Pensive emoji">
// //           😔
// //         </span>{" "}
// //         we couldn’t find what you were looking for.
// //         <br />
// //         {process.env.NODE_ENV === "development" ? (
// //           <>
// //             <br />
// //             Try creating a page in <code style={codeStyles}>src/pages/</code>.
// //             <br />
// //           </>
// //         ) : null}
// //         <br />
// //         <Link to="/">Go home</Link>.
// //       </p>
// //     </main>
// //   )
// // }

// export default NotFoundPage;

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `;
