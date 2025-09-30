# Notion Blog Integration Setup

This website integrates with Notion for blog content management. Follow these steps to set it up:

## 1. Create a Notion Database

Create a new database in Notion with the following properties:

- **Title** (title) - The blog post title
- **Slug** (text) - URL-friendly slug (e.g., "5-najczestszych-bledow-treningowych")
- **Status** (select) - Options: Published, Draft
- **Published Date** (date) - Publication date
- **Category** (select) - Options: Treningi, Odżywianie, Motywacja, High Performance, Regeneracja
- **Featured Image** (files) - Cover image for the post
- **Excerpt** (text) - Short description (2-3 sentences)
- **Read Time** (number) - Estimated reading time in minutes
- **Author** (text) - Author name (default: "Mateusz Nikrant")
- **Content** - The page content (write your blog post content directly in Notion)

## 2. Get Your Notion API Key

1. Go to https://www.notion.so/my-integrations
2. Click "+ New integration"
3. Give it a name (e.g., "Mateusz Nikrant Blog")
4. Select the workspace
5. Copy the "Internal Integration Token"

## 3. Get Your Database ID

1. Open your blog database in Notion
2. Copy the URL - it will look like: `https://www.notion.so/{workspace}/{database_id}?v=...`
3. The `database_id` is the 32-character string between the workspace name and the `?`

## 4. Share Database with Integration

1. Open your database in Notion
2. Click "..." menu in the top right
3. Click "Add connections"
4. Select your integration

## 5. Add Environment Variables

Create or update `.env.local` file in the project root:

```env
NOTION_API_KEY=secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DATABASE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## 6. Test the Integration

The website will automatically use mock data if Notion credentials are not set. Once configured:

1. Start the development server: `npm run dev`
2. Visit `/blog` to see your posts
3. Create a new post in Notion with Status="Published" to see it appear

## Mock Data

If you don't configure Notion, the website will work with mock data that demonstrates all features. This is perfect for development and testing.

## Notes

- Only posts with Status="Published" will be displayed
- Posts are sorted by Published Date (newest first)
- Category filters work automatically
- The slug must be unique for each post
- Featured images should be added to the Notion page

## Example Blog Post in Notion

**Title:** 5 Najczęstszych Błędów Treningowych
**Slug:** 5-najczestszych-bledow-treningowych
**Status:** Published
**Published Date:** 2024-03-15
**Category:** Treningi
**Read Time:** 5
**Author:** Mateusz Nikrant
**Excerpt:** Poznaj najczęstsze błędy, które popełniają osoby trenujące i dowiedz się, jak ich unikać.
**Content:** [Write your blog post content in the Notion page]