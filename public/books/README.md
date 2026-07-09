# Каталог PDF-книг

Поместите файлы книг в эту папку и добавьте запись в `src/pages/Library.jsx` (массив `LIBRARY_SECTIONS`) и в `src/locales/ru.json` → `library.books.<id>`.

```js
{
  id: 'bookId',
  pdfFilename: 'название-файла.pdf',
  category: 'arabicSources',
  type: 'article',
}
```

Тексты карточек (название, автор, описание) — в `src/locales/ru.json` и `src/locales/fr.json` в разделе `library.books`.

Кнопка «Читать» открывает PDF по пути `/books/<имя-файла>` с корректной кодировкой URL.
