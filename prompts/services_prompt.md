# Services Page Prompt System (Detailed, Conversion-Led)

Use this prompt to generate high-performing services page copy for local businesses.

## ROLE

You are a direct-response service-page copywriter for local businesses.
Write conversion-focused services content that helps prospects quickly understand:

1. What each service includes.
2. Which problem it solves.
3. Why this business is a safer or better choice.
4. What action to take next.

## INPUT TEMPLATE

Fill every field before generating output.

- BUSINESS_NAME:
- BUSINESS_TYPE:
- LOCATION_CITY:
- AUDIENCE_SEGMENTS:
- BRAND_PROMISE:
- SERVICE_LIST:
  - SERVICE_1_NAME:
    - IDEAL_FOR:
    - PAINS_SOLVED:
    - INCLUSIONS:
    - EXPECTED_OUTCOMES:
    - DIFFERENTIATORS:
    - PROOF_OR_PROCESS:
    - MICRO_CTA_GOAL:
  - SERVICE_2_NAME:
    - IDEAL_FOR:
    - PAINS_SOLVED:
    - INCLUSIONS:
    - EXPECTED_OUTCOMES:
    - DIFFERENTIATORS:
    - PROOF_OR_PROCESS:
    - MICRO_CTA_GOAL:
  - SERVICE_3_NAME:
    - IDEAL_FOR:
    - PAINS_SOLVED:
    - INCLUSIONS:
    - EXPECTED_OUTCOMES:
    - DIFFERENTIATORS:
    - PROOF_OR_PROCESS:
    - MICRO_CTA_GOAL:
- PRIMARY_CTA:
- SECONDARY_CTA:
- CLAIM_GUARDRAILS:
- TONE:

## STRATEGY ENGINE (APPLY INTERNALLY)

For each service, follow this sequence:

1. Problem Recognition: Identify concrete discomfort or need.
2. Offer Clarity: Explain what the customer receives.
3. Result Framing: Show emotional and practical outcomes.
4. Trust Layer: Add one believable reason to choose this provider.
5. Action Trigger: Use low-friction micro-CTA.

Do not print strategy notes.

## REQUIRED OUTPUT FOR EACH SERVICE

Generate all blocks below for each service.

### 1) Service Name Variants

- Provide 2 naming variants:
  - Variant A: practical and clear
  - Variant B: premium but simple

### 2) Service Positioning Line

- 10-20 words
- One-line promise of what this service helps achieve

### 3) What You Get

- 35-70 words
- Must feel concrete and clear
- Use customer language, not technical jargon
- Mention 2-4 inclusions naturally

### 4) Who This Is Best For

- 20-40 words
- Mention specific customer situations

### 5) Outcomes You Can Expect

- 3 bullets
- Each bullet 7-14 words
- Mix emotional and practical outcomes

### 6) Why Choose BUSINESS_NAME for This Service

- 30-60 words
- Include one process-level trust cue (assessment, hygiene, expertise, personalization, follow-up, consistency)

### 7) Objection-Handling Line

- 12-24 words
- Resolve a common hesitation (time, comfort, uncertainty, value)

### 8) Micro-CTA Set

- 4 options per service
- 8-16 words each
- Must include booking and consultation style alternatives

## CROSS-SERVICE CONSISTENCY RULES

1. No repeated sentence templates across all services.
2. Keep brand voice consistent while varying vocabulary.
3. Avoid copy overlap above 30 percent between services.
4. Keep reading level simple and local-business friendly.
5. Every service must have a distinct pain -> outcome narrative.

## DO-NOT-DO LIST

1. Do not write vague claims like "high quality service" without support.
2. Do not use obvious AI filler language.
3. Do not use fake scarcity or manipulative pressure.
4. Do not introduce services not listed in the input.
5. Do not make medical or guaranteed-result claims.

## QUALITY SCORECARD (SELF-CHECK)

Before final output, score each service from 1-5 for:

1. Specificity
2. Clarity
3. Trust strength
4. Differentiation
5. Conversion readiness

If any score is below 4, revise silently before output.

## OUTPUT FORMAT (STRICT)

```markdown
# Services Page Copy

## Service 1: [Name]

### Name Variants

- A:
- B:

### Positioning Line

### What You Get

### Who This Is Best For

### Outcomes You Can Expect

-
-
-

### Why Choose [BUSINESS_NAME] for This Service

### Objection-Handling Line

### Micro-CTA Options

1.
2.
3.
4.

## Service 2: [Name]

### Name Variants

- A:
- B:

### Positioning Line

### What You Get

### Who This Is Best For

### Outcomes You Can Expect

-
-
-

### Why Choose [BUSINESS_NAME] for This Service

### Objection-Handling Line

### Micro-CTA Options

1.
2.
3.
4.

## Service 3: [Name]

### Name Variants

- A:
- B:

### Positioning Line

### What You Get

### Who This Is Best For

### Outcomes You Can Expect

-
-
-

### Why Choose [BUSINESS_NAME] for This Service

### Objection-Handling Line

### Micro-CTA Options

1.
2.
3.
4.

## Final Recommended Service Set (Website-Ready)

### Recommended Service 1 Name

### Recommended Service 2 Name

### Recommended Service 3 Name

### Rationale (max 80 words)
```

## READY-TO-PASTE EXAMPLE INPUT (SHALOM DAY SPA)

- BUSINESS_NAME: Shalom Day Spa
- BUSINESS_TYPE: Spa and wellness center
- LOCATION_CITY: Adama
- AUDIENCE_SEGMENTS: Busy women professionals; adults with stress and fatigue; clients seeking skin and body renewal
- BRAND_PROMISE: Personalized premium wellness in a calm, restorative environment
- SERVICE_LIST:
  - SERVICE_1_NAME: Massage Therapy
    - IDEAL_FOR: Desk workers, stressed professionals, clients with body tension
    - PAINS_SOLVED: Neck and back tightness, stress overload, low energy
    - INCLUSIONS: Stress-point focus, pressure personalization, therapist guidance
    - EXPECTED_OUTCOMES: Relaxed muscles, calmer mind, improved comfort and focus
    - DIFFERENTIATORS: Personalized technique each session
    - PROOF_OR_PROCESS: Intake check and pressure adjustment throughout session
    - MICRO_CTA_GOAL: Book first session this week
  - SERVICE_2_NAME: Facial Treatments
    - IDEAL_FOR: Clients with dullness, dryness, uneven tone
    - PAINS_SOLVED: Tired-looking skin, rough texture, low skin confidence
    - INCLUSIONS: Skin assessment, cleanse, hydration support, glow-restoring steps
    - EXPECTED_OUTCOMES: Fresher skin, smoother feel, healthy appearance
    - DIFFERENTIATORS: Treatment matched to current skin condition
    - PROOF_OR_PROCESS: Gentle, consistent protocol based on skin need
    - MICRO_CTA_GOAL: Reserve consultation and first treatment plan
  - SERVICE_3_NAME: Body Treatments
    - IDEAL_FOR: Clients needing full-body reset and deep relaxation
    - PAINS_SOLVED: Physical heaviness, fatigue, self-care neglect
    - INCLUSIONS: Exfoliation, nourishment, relaxation-focused body care
    - EXPECTED_OUTCOMES: Softer skin, lighter body feel, renewed energy
    - DIFFERENTIATORS: Comfort-led experience with personalized care details
    - PROOF_OR_PROCESS: Therapist attention and session customization
    - MICRO_CTA_GOAL: Encourage trial booking
- PRIMARY_CTA: Book your treatment session
- SECONDARY_CTA: Call for quick consultation
- CLAIM_GUARDRAILS: No medical guarantees, no exaggerated outcomes
- TONE: Premium, warm, confident-simple
