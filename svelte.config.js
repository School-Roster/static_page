// import adapter from "@sveltejs/adapter-static";

// export default {
//   kit: {
//     adapter: adapter({
//       pages: "build",
//       assets: "build",
//       fallback: "index.html",
//     }),
//   },
// };

import adapter from "@sveltejs/adapter-netlify";
import { sveltekit } from "@sveltejs/kit/vite";

export default {
  kit: {
    adapter: adapter(),
  },
  preprocess: sveltekit(),
};
