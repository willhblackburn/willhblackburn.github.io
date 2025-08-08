---
layout: page
title: Thoughts
permalink: /thoughts/
---

[back home](/)

Short insights on building products, AI, and engineering.

<br>

---

### Learning to Delegate to AI
July 7, 2025

Developers *who have never delegated before in their life* when they ask AI to do something for them and it goes poorly.

It's why Anthropic's "golden rule of clear prompting" is to "show your prompt to a colleague, ideally someone who has minimal context on the task, and ask them to follow the instructions. If they're confused, Claude (Cursor, Windsurf, etc.) will likely be too."

Do this a few times. You'll get better. Your code will be better.

I always ask myself: "What's the delta between the code I would have written and the AI output?" Then, "Why does the difference exist?"

It's usually not the model, but the context I have that the AI doesn't. Close the gap.

<br>

---

### How to Hire Your First AI Engineer
June 22, 2025

A CTO of a billion-dollar software company is looking to hire their first AI engineer. He asked me what to look for. Here's what I said. What did I miss?

First, decide if you want to find someone with an ML or full-stack background.

I would choose ML if you are going deep, but if you want to move faster and test with customers, full-stack is preferred.

Second, screen candidates in four main areas:

1. Have they shipped AI/LLM apps to production?
2. How do they think about and handle evals?
3. When would they suggest fine-tuning and how would they go about it?
4. What is their experience with AI infrastructure?

I think those four areas quickly filter out the developers who have just slapped "AI" in front of their title without having the experience to back it up.

<br>

---

### Stop Copy-Pasting from ChatGPT
June 14, 2025

I cannot think of a single good reason to still be copying and pasting code back and forth from ChatGPT or Claude.

Okay, there's one good reason. Your company won't let you use an AI coding tool.

But if that's the case, you're better off using ChatGPT to update your resume.

Alternatives to copy & paste?
- windsurf
- cursor
- claude code
- openai's codex cli
- aider
- github copilot even!

<br>

---

### The Hidden Power of Async AI Agents
May 24, 2025

I was completely wrong about async AI coding agents like OpenAI Codex.

When I first got access to Codex, all I was thinking about was how it could do the big, complex things: refactoring, full feature build-outs, etc.

But I was willing to start small -> paper cuts within the platform.

I gave these to Codex, and it performed great. As I reviewed the pull requests it submitted, I asked myself, "Why hadn't I addressed these earlier?" Many of these fixes were tasks that took under 10 minutes.

That's when it really hit me.

How often are you sitting in your codebase, ready to switch to a new task: creating a new branch, finding files, making changes, testing, pushing commits, and returning to your previous work? Almost never. That's why it's possible to spend 30 seconds creating a ticket but not do the task, regardless of how "quick" it is.

That's where Codex has changed the game for me. It has zero context-switching costs. It IS just sitting there in your code, waiting for a task. And you can fire off 10+ of them at once.

It can address the small fixes while you stay in flow.

For now, I'll stay focused on the big challenges and let Codex handle the small things. The important, but not urgent, issues.

<br>

---

### Developers Need Two Hats Now
April 12, 2025

"I need to take my developer hat off and put on my product hat." NO!

I had this conversation with a developer the other day, and it made me finally realize something.

It's not about switching hats at this point.

If you're a developer, you need to put a product hat on and never take it off. You now have two hats, and that's how it's going to be for the rest of your life.

It's time to think more critically about product:
 – why what you're building matters
 – how it's going to be used
 – how intuitive it is

This is the kind of judgment you're developing that can become incredibly important in the future.