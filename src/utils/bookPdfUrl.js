/**
 * Формирует URL для PDF в public/books с корректной кодировкой кириллицы и спецсимволов.
 */
export const getBookPdfUrl = (filename) => `/books/${encodeURIComponent(filename)}`;
