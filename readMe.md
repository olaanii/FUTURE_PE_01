# AI Website Copy System - Shalom Day Spa

## Project Summary

This repository contains a structured prompt engineering system for generating conversion-focused website copy for local businesses.

The selected client case is **Shalom Day Spa, Adama**. The workflow produces homepage copy, service page content, CTA sections, and tone-adapted versions that are ready for real website publishing.

## Why This Business

Shalom Day Spa was chosen because spa businesses rely heavily on trust, emotional resonance, and clear value communication. This makes it an ideal local-business case for demonstrating how AI prompts can improve:

- clarity of messaging
- confidence and trust in the brand
- conversion intent through strong calls-to-action

## Objective

Build a repeatable prompt framework that can:

- generate homepage copy with a strong value proposition
- create service descriptions tailored to customer outcomes
- write persuasive booking and trust CTAs
- adapt tone for different business contexts
- produce website-ready content with minimal manual editing

## Prompt Architecture

The system is modular and split by copy objective:

- [prompts/website_autodesign_master_prompt.md](prompts/website_autodesign_master_prompt.md): full auto-design + copy + UX blueprint for users without design references
- [prompts/lovable_framer_build_prompt.md](prompts/lovable_framer_build_prompt.md): one-shot builder prompt for Lovable and Framer AI
- [prompts/senior_frontend_handoff_prompt.md](prompts/senior_frontend_handoff_prompt.md): implementation plan prompt for HTML/CSS/JS developers
- [prompts/master_prompt_system.md](prompts/master_prompt_system.md): end-to-end orchestration prompt that generates full website copy package in one run
- [prompts/homepage_prompt.md](prompts/homepage_prompt.md): value proposition and homepage messaging
- [prompts/services_prompt.md](prompts/services_prompt.md): service-level persuasion and differentiation
- [prompts/cta_prompt.md](prompts/cta_prompt.md): high-converting CTA variations
- [prompts/tone_adapter_prompt.md](prompts/tone_adapter_prompt.md): multi-tone adaptation without meaning drift

Each prompt now includes:

- reusable variable templates for different business types
- anti-generic writing constraints
- conversion logic (pain, value, trust, action)
- output formatting for direct website publishing
- internal quality gates for clarity, specificity, and conversion intent

## Generation Workflow

Use prompts in this sequence:

1. Use auto-design master prompt when client has no design reference.
2. Use master prompt for copy-focused full-package generation.
3. Use homepage/services/CTA prompts for deeper module-level optimization.
4. Use tone adapter prompt for multi-industry tone reuse without meaning drift.
5. Use Lovable/Framer build prompt for direct AI builder generation.
6. Use senior frontend handoff prompt for custom coded implementation.
7. Perform human review for compliance, factual safety, and final polish.

## Outputs Included

- [outputs/shalom_homepage.md](outputs/shalom_homepage.md)
- [outputs/shalom_services.md](outputs/shalom_services.md)
- [outputs/shalom_cta.md](outputs/shalom_cta.md)
- [outputs/shalom_tone_adapted.md](outputs/shalom_tone_adapted.md)

These outputs are designed to be directly usable on a website with minor brand polish.

## Tools Used

- ChatGPT (primary generation tool)
- Claude (optional alternative)
- Google Gemini (optional alternative)
- Lovable (website deployment-ready copy handoff)
- Framer AI (website section implementation handoff)

## Assignment Rubric Coverage

- Homepage copy with clear benefit and audience targeting: completed
- Service content based on business type and customer outcomes: completed
- Persuasive CTA sections with trust and urgency angles: completed
- Tone adaptation support for different industries: completed
- Reusable prompt system for future clients: completed

## Real Client Sellability

This system can be pitched as a practical service to local businesses:

- initial website copy setup
- periodic AI-assisted content updates
- tone and campaign adaptation for new offers

The repository is portfolio-ready for presentation to business owners, agencies, and paying clients.

## Repository Structure

```text
FUTURE_PE_01/
  prompts/
    website_autodesign_master_prompt.md
    lovable_framer_build_prompt.md
    senior_frontend_handoff_prompt.md
    master_prompt_system.md
    homepage_prompt.md
    services_prompt.md
    cta_prompt.md
    tone_adapter_prompt.md
  outputs/
    shalom_homepage.md
    shalom_services.md
    shalom_cta.md
    shalom_tone_adapted.md
  readMe.md
```

## Quick Reuse Guide

To adapt this system for a new business:

1. Replace variable values in the prompt files (name, location, audience, USP).
2. Run generation in the same workflow order.
3. Select the best output variants and apply tone adaptation.
4. Perform final human review before publishing.
