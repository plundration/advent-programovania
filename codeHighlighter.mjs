import { getHighlighter } from 'shiki';

const THEME = 'github-dark';

/**
 * @param code {string} - code to highlight
 * @param lang {string} - code language
 * @param meta {string} - code meta
 * @returns {Promise<string>} - highlighted html
 */
async function highlighter(code, lang, meta) {
  const shikiHighlighter = await getHighlighter({
    theme: THEME,
  });
  const html = shikiHighlighter.codeToHtml(code, {
    lang,
  });
  return html;
}

export default highlighter;