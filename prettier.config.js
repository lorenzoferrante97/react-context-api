/** @type {import("prettier").Config} */

const config = {
  bracketSpacing: true, // spazi tra le parentesi graffe degli oggetti letterali
  tabWidth: 2, // spazi al tab
  semi: true, // punti e virgola alla fine delle righe
  singleQuote: false, // virgolette singole o doppie
  jsxSingleQuote: true, // virgolette singole su jsx
  trailingComma: "none", // virgole dopo l ekey finali di array e oggetti ( none, es5, all )
  jsxBracketSameLine: true, // chiusura tag jsx su più righe su nuova riga
  arrowParens: "avoid", // parentesi attorno a singolo parametro di funzione ( always, avoid )
  htmlWhitespaceSensitivity: "strict", // gestione degli spazi bianchi ( strict, css, ignore )
  quoteProps: "as-needed", // virgolette nelle key degli oggetti
  withNodeModules: false, // prettier non lavora sui file in node_modules
  singleAttributePerLine: false, // attributi di elementi su più righe

  plugins: ["prettier-plugin-tailwindcss"]
  // Aggiungi altre opzioni di Prettier qui se necessario
};

export default config;
