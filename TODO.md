Here is the same agent prompt in clean .md (Markdown) format so you can save it as something like:

agent-blog-builder.md

and paste it into Claude Code / Cursor / AI agent.

⸻

agent-blog-builder.md

# ByteHubble Engineering Blog Builder Agent

You are a **senior full-stack engineer agent** working inside a **Next.js 14 App Router project using TypeScript and TailwindCSS**.

Your task is to build a **professional engineering blog system** inside the project.

The website represents an engineering platform called:

**ByteHubble Engineering**

The blog should look like a professional engineering research hub similar to:

- Stripe Engineering
- Vercel Blog
- Supabase Engineering

You will operate as an autonomous coding agent that can:

- read the repository
- create files
- generate content
- crawl images from the web
- update existing files
- verify build

Follow the steps carefully.

---

# Project Context

Framework: **Next.js App Router**

Root folder:

src/

Important folders:

src/app
src/components
src/lib
src/assets

The homepage already has a **Blog section** that reads from:

src/lib/constants.ts

Your task is to connect new blog pages to this system.

---

# Step 1 — Create Blog Folder Structure

Inside the project create:

src/app/blog

Then create **three blog article folders**.

src/app/blog/postgresql-deep-dive
src/app/blog/postgres-mvcc-explained
src/app/blog/postgres-ai-infrastructure

Each folder must contain:

page.tsx

Example:

src/app/blog/postgresql-deep-dive/page.tsx

---

# Step 2 — Create Main Blog Page

Create:

src/app/blog/page.tsx

This page must:

- display blog cards
- read posts from `BLOG_POSTS`
- use Tailwind CSS
- be responsive
- use the `Container` component

Each card must show:

- blog image
- title
- category
- read time
- excerpt
- link to the article

Grid layout:

grid grid-cols-1 md:grid-cols-3 gap-8

---

# Step 3 — Update Blog Constants

Modify:

src/lib/constants.ts

Add three blog entries.

---

### Blog 1

slug: postgresql-deep-dive

title: PostgreSQL Is Not What You Think

category: Database Engineering

readTime: 8 min read

excerpt:
A deep exploration of PostgreSQL internals including MVCC snapshots,
WAL-based CDC, JIT compilation, and vector search architecture.

---

### Blog 2

slug: postgres-mvcc-explained

title: Understanding PostgreSQL MVCC Internals

category: Database Internals

readTime: 6 min read

excerpt:
Learn how PostgreSQL implements multi-version concurrency control
and snapshot isolation under the hood.

---

### Blog 3

slug: postgres-ai-infrastructure

title: PostgreSQL as AI Infrastructure

category: AI Engineering

readTime: 7 min read

excerpt:
Using PostgreSQL, pgvector, and relational architecture to power
modern AI pipelines and RAG systems.

---

# Step 4 — Generate Blog Article Content

Inside each blog page create a **technical article**.

The article must include:

- Introduction
- Architecture overview
- Technical explanation
- SQL examples
- Production insights
- Conclusion

Code examples must use fenced blocks.

Example:

```sql
SELECT txid_current(),
       txid_current_snapshot();

Use developer-friendly explanations.

⸻

Step 5 — Crawl Images from Web

Create a folder:

src/assets/blog

Download 3 images from open sources:

Allowed sources:
	•	Unsplash
	•	Pexels
	•	public architecture diagrams

Images should represent:
	•	database architecture
	•	PostgreSQL internals
	•	AI infrastructure

Save images as:

src/assets/blog/postgres-architecture.jpg
src/assets/blog/mvcc-diagram.jpg
src/assets/blog/ai-database.jpg


⸻

Step 6 — Import Images in Articles

Use Next.js Image component.

Example:

import Image from "next/image";
import mvcc from "@/assets/blog/mvcc-diagram.jpg";

<Image
  src={mvcc}
  alt="PostgreSQL MVCC Architecture"
/>

Place the image below the article title.

⸻

Step 7 — Add SEO Metadata

Each blog page must export metadata.

Example:

export const metadata = {
  title: "PostgreSQL Deep Dive — MVCC, WAL, and AI Infrastructure",
  description:
    "Deep engineering guide to PostgreSQL internals, replication, and modern AI data architecture."
};


⸻

Step 8 — Style Blog Layout

Use Tailwind styling.

Container width:

max-w-4xl

Spacing:

py-20

Typography:

prose
text-gray-700

Code blocks:

bg-black
text-green-400
rounded-lg
overflow-x-auto


⸻

Step 9 — Ensure Responsiveness

Verify the blog layout works on:
	•	mobile
	•	tablet
	•	desktop

Use responsive Tailwind utilities.

⸻

Step 10 — Final Verification

Run development server.

npm run dev

Verify:
	•	blog page loads
	•	blog cards display
	•	article pages work
	•	images load correctly
	•	no console errors
	•	all links function

⸻

Expected Result

The website should now have a professional engineering blog system.

Structure:

Homepage
   ↓
Blog Section
   ↓
Blog Listing Page
   ↓
3 Engineering Articles

This should resemble:
	•	Stripe Engineering
	•	Vercel Blog
	•	Supabase Engineering

⸻

Output

After implementation show:
	•	created folders
	•	created files
	•	modified files
	•	confirmation of successful build

Do not break existing components.

Build the blog as a production-ready engineering research hub for ByteHubble.

---

If you want, I can also give you **a much more powerful v2 prompt** that makes the agent automatically add:

- **Table of contents sidebar**
- **syntax highlighting like VSCode**
- **reading progress bar**
- **copy code button**
- **Stripe-style blog UI**

which will make your site look like a **real startup engineering blog (not a simple blog page)**.


blog one  Info you need to desplay on website 