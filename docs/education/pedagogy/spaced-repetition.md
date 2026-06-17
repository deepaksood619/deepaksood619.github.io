# Spaced Repetition

Spaced repetition is a learning technique that involves reviewing information at increasing intervals over time to combat the forgetting curve and optimize long-term retention. It's one of the most evidence-based and effective methods for memorizing large amounts of information.

## Core Principles

### The Forgetting Curve

Hermann Ebbinghaus (1885) discovered that memory retention follows a predictable exponential decay pattern:

- Without reinforcement, we forget approximately 50% of new information within 24 hours
- After 7 days, retention drops to around 10-20% without review
- Each review session "resets" the forgetting curve, but at a slower decay rate

### The Spacing Effect

The spacing effect demonstrates that **distributed practice** (spreading reviews over time) is far more effective than **massed practice** (cramming). Key findings:

- Information reviewed at intervals is retained 200-300% better than information studied in one session
- Optimal spacing intervals increase exponentially after each successful recall
- The difficulty of retrieval strengthens memory (desirable difficulty)

### Active Recall

Spaced repetition relies on **active recall** rather than passive review:

- Testing yourself (retrieving from memory) is more effective than re-reading
- The act of retrieval itself strengthens neural pathways
- Failed recall attempts still provide learning benefits by identifying knowledge gaps

## Spaced Repetition Systems (SRS)

### What is an SRS?

A Spaced Repetition System is software that automates the scheduling of review sessions based on algorithmic predictions of when you're about to forget information. SRS platforms track your performance and adjust intervals accordingly.

### Common SRS Algorithms

#### SM-2 Algorithm (SuperMemo 2)

The foundational algorithm used by Anki and many other SRS platforms:

- Uses an "easiness factor" (EF) that adjusts based on recall quality
- Default intervals: 1 day → 6 days → then multiplied by EF
- EF starts at 2.5 and adjusts based on performance (1.3 to 2.5 range)

**Formula:**
```
New Interval = Previous Interval × Easiness Factor
```

#### SM-17/18 (SuperMemo)

Modern SuperMemo versions use more sophisticated algorithms:

- Considers retrievability (probability of recall)
- Optimizes for long-term retention vs. review workload
- Uses two-component model of memory (stability and retrievability)

#### FSRS (Free Spaced Repetition Scheduler)

Newer algorithm developed for Anki (2023+):

- Machine learning-based approach trained on real user data
- More accurate predictions than SM-2
- Considers: card difficulty, memory stability, retrievability, and scheduling history
- Available as an option in Anki 23.10+

### Review Quality Ratings

Most SRS platforms use a quality scale to adjust scheduling:

**Anki's 4-button system:**

- **Again (1):** Complete failure - resets card to beginning of learning queue
- **Hard (2):** Correct but difficult - shorter than normal interval
- **Good (3):** Correct with moderate effort - standard interval
- **Easy (4):** Trivial recall - much longer interval

**SuperMemo's 6-point scale:**

- 0: Complete blackout
- 1: Incorrect, but recognized answer
- 2: Incorrect, but seemed easy
- 3: Correct, but required significant effort
- 4: Correct with some hesitation
- 5: Perfect recall

## Key SRS Terminology

### Card States

**New:** Cards that have never been studied

**Learning:** Cards currently being learned (in short-term review cycles)

- Multiple steps (e.g., 1m, 10m, 1d) before graduation
- Failed reviews send card back to first learning step

**Review/Young:** Recently graduated cards (interval `<` 21 days typically)

**Mature:** Cards with intervals `>` 21 days (well-learned material)

**Relearning:** Previously learned cards that were forgotten, going through learning steps again

### Interval Management

**Interval:** Time between reviews (e.g., 3 days, 2 months, 1 year)

**Graduating Interval:** First interval when a card moves from Learning to Review state (typically 1 day)

**Easy Interval:** Interval assigned when "Easy" is pressed on a new card (typically 4 days)

**Maximum Interval:** Upper limit on review intervals (default: 36,500 days / 100 years)

**Interval Modifier:** Global multiplier applied to all calculated intervals (default: 100%)

- Increase to `>` 100% for easier material or to reduce workload
- Decrease to `<` 100% for harder material or higher retention targets

**Fuzz Factor:** Random variation added to intervals (±5%) to prevent cards from always coming due together

### Card Difficulty

**Ease Factor / Easiness:** Multiplier that determines how quickly intervals grow (typically 130-250%)

- Starts at 250% for new cards
- Decreases when "Hard" or "Again" is pressed
- Increases when "Easy" is pressed
- Lower ease = more frequent reviews

**Leeches:** Cards that are repeatedly forgotten (e.g., failed 8+ times)

- Indicates ineffective card design or prerequisite knowledge gaps
- Should be: rewritten, split into multiple cards, or suspended until prerequisites are learned

### Review Scheduling

**Due Date:** When a card is scheduled for review

**Overdue:** Cards past their due date (accumulated backlog)

- Large backlogs can demotivate and reduce retention
- Better to reduce daily new cards than accumulate overdues

**Daily Limits:**

- **New cards/day:** How many unseen cards to introduce (e.g., 20/day)
- **Review cards/day:** Maximum reviews per day (e.g., 200/day)
- Reviews should typically be unlimited; new cards control workload

### Card Actions

**Bury:** Temporarily hide a card until the next day

- Useful when a related card just appeared
- Automatically unburies at midnight
- Manual bury: right-click → Bury

**Suspend:** Indefinitely pause a card from appearing in reviews

- Intervals are preserved (unlike deleting)
- Used for: leeches, outdated information, cards needing revision
- Must be manually unsuspended to resume reviews

**Reset:** Erase all scheduling history, returning card to "new" status

- Use sparingly - loses valuable algorithm data
- Alternative: use "Reposition" to move new cards in queue

**Reschedule:** Manually set a new due date or interval

- Useful after long breaks or importing cards from another source
- Can specify: new interval, place in review queue, or reset completely

### Deck Organization

**Deck:** Container for cards (e.g., "Spanish Vocabulary", "Medical School::Anatomy")

**Subdeck:** Nested deck structure using `::` separator

- Example: `Languages::Spanish::Verbs`
- Subdecks inherit parent deck settings unless overridden

**Filtered Deck:** Temporary deck created by search query

- Used for: cramming before exams, reviewing specific tags, catching up on overdue cards
- Cards return to original deck after session

**Parent Limit:** Whether daily limits apply separately to each deck or are shared with parent

- Enabled: each deck has independent limits
- Disabled: reviewing subdeck counts toward parent's limit

### Advanced SRS Concepts

**Retention Rate:** Percentage of reviews answered correctly

- Typical targets: 80-90% for general knowledge, 90-95% for critical material
- `<` 80%: material too difficult or intervals too long
- `>` 95%: reviewing too frequently (inefficient)

**True Retention:** Actual measured retention from review performance

**Desired Retention:** Target retention rate set in FSRS or other algorithms (e.g., 0.9 = 90%)

**Stability:** How long a memory can last before it becomes unretrievable (FSRS concept)

**Retrievability:** Current probability of successful recall (FSRS concept)

**Load Balancing:** Distributing reviews evenly across days to avoid spikes

- Fuzz factor helps with this automatically
- Advanced: use add-ons like "Load Balancer" for better distribution

## Spaced Repetition Techniques

### Effective Card Creation

**Minimum Information Principle:** Break complex information into atomic facts

❌ Poor: "What were the causes of World War I?"
✅ Better: Multiple cards for each specific cause (assassination, alliances, militarism, etc.)

**Cloze Deletions:** Fill-in-the-blank format

```
The {{c1::mitochondria}} is the {{c2::powerhouse}} of the cell.
```

- Creates focused questions
- Reduces card creation time
- Avoids "recognition" vs "recall" trap

**Bidirectional Cards:** Create reverse cards when appropriate

- Front: Spanish word → English translation
- Back: English word → Spanish word
- Use for: vocabulary, definitions, equations

**Image Occlusion:** Hide parts of images for visual learning

- Anatomy diagrams (hide labels)
- Architecture/engineering drawings
- Musical notation

### Optimal Spacing Strategies

**Leitner System:** Physical flashcard method with boxes

- Box 1: Daily review
- Box 2: Every 2 days
- Box 3: Every 4 days
- Box 4: Every 8 days
- Box 5: Every 16 days
- Cards move forward on success, back to Box 1 on failure

**Pimsleur Method:** Audio-based language learning with specific intervals

- 5 seconds → 25 seconds → 2 minutes → 10 minutes → 1 hour → 5 hours → 1 day → 5 days → 25 days → 4 months → 2 years

**Expanding Retrieval Practice:** Start with short intervals, rapidly expand

- Useful for initial learning phase
- Example: 1 minute → 10 minutes → 1 hour → 1 day → then standard SRS

### Review Strategies

**Daily Consistency:** Review every day to prevent backlog

- Better to do 15 cards/day consistently than 100 cards sporadically
- Set realistic daily limits based on long-term sustainability

**Time-Boxing:** Allocate fixed time (e.g., 30 minutes) rather than card count

- Prevents burnout from large review queues
- Prioritize: overdue reviews → due reviews → new cards

**Interleaving:** Mix topics during review sessions

- Prevents pattern recognition shortcuts
- Strengthens discrimination between similar concepts

**Before Bed Review:** Take advantage of sleep consolidation

- Reviewed material is preferentially consolidated during sleep
- Avoid introducing completely new, complex information right before sleep

## Popular SRS Platforms

### Anki

**Strengths:**

- Free and open-source
- Highly customizable (add-ons, card templates, algorithms)
- Cross-platform (Windows, Mac, Linux, iOS, Android, web)
- Best for: serious learners, medical students, language learners

**Key Features:**

- Supports SM-2 and FSRS algorithms
- Rich media (audio, images, video)
- LaTeX support for math/science
- Shared decks (AnkiWeb)
- Extensive plugin ecosystem

**Limitations:**

- Steeper learning curve
- iOS app costs $25 (Android free)
- Default interface is utilitarian

### SuperMemo

**Strengths:**

- Original SRS software (since 1987)
- Most sophisticated algorithm (SM-17/18)
- Incremental reading (integrate reading and flashcard creation)

**Limitations:**

- Windows only
- Expensive ($66 one-time)
- Dated interface
- Steeper learning curve than Anki

### RemNote

**Strengths:**

- Combines note-taking with SRS (bidirectional linking like Roam/Obsidian)
- Automatically creates flashcards from notes
- Built-in spaced repetition without separate app

**Use Case:**

- Students who want integrated notes + flashcards
- Knowledge workers building a "second brain"

### Quizlet

**Strengths:**

- User-friendly interface
- Large library of pre-made sets
- Social features (study groups, shared decks)

**Limitations:**

- Limited true SRS functionality (more basic scheduling)
- Premium features behind paywall
- Less customization than Anki

### Mnemosyne

**Strengths:**

- Free and open-source
- Clean, simple interface
- Good for beginners

**Limitations:**

- Fewer features than Anki
- Smaller community and plugin ecosystem

## Evidence Base

### Research Findings

**Retention Gains:**

- Bahrick et al. (1993): Spacing increased retention from 35% to 80% over 8-year period
- Cepeda et al. (2006): Meta-analysis found average effect size of d=0.42 for spacing effect

**Optimal Intervals:**

- Cepeda et al. (2008): Optimal spacing is 10-20% of desired retention period
- For 1-year retention: review after 36-73 days
- For 5-year retention: review after 6-12 months

**Desirable Difficulty:**

- Bjork & Bjork (2011): More difficult retrieval creates stronger learning
- 80-85% success rate appears optimal (balance difficulty vs. frustration)

### Limitations and Critiques

**Not Universal:** Spaced repetition works best for:

- Declarative knowledge (facts, vocabulary, definitions)
- Recognition/recall tasks
- Stable information (doesn't change)

**Less Effective For:**

- Deep conceptual understanding (requires elaborative rehearsal)
- Procedural skills (need deliberate practice, not just recall)
- Creative application (transfer requires varied practice contexts)

**Time Investment:** Front-loaded effort

- Creating effective cards takes time
- Daily review commitment required
- Benefits compound over months/years, not days/weeks

## Integration with Other Learning Methods

### Complementary Techniques

**Elaborative Interrogation:** Ask "why" questions before creating cards

- Deepens understanding before memorization
- Creates better retrieval cues

**Dual Coding:** Combine verbal and visual information

- Add images to cards
- Draw diagrams from memory
- Use image occlusion

**Interleaving:** Mix subjects during study sessions

- Don't review all Spanish cards, then all biology cards
- Randomize or use Anki's default mixing

**Testing Effect:** Combine SRS with practice problems

- SRS for foundational knowledge
- Practice problems for application
- Alternate between both

### Learning Pipeline

1. **Initial Learning:** Lectures, reading, videos (acquire information)
2. **Note-Taking:** Capture key concepts in organized notes
3. **Card Creation:** Convert notes into atomic flashcards
4. **Initial Review:** Short-interval repetition (1m, 10m, 1h)
5. **Spaced Review:** Long-term SRS scheduling (days, weeks, months)
6. **Application:** Use knowledge in practice problems, projects, teaching others

## Best Practices

### Card Design

- **One Fact Per Card:** Avoid complex multi-part questions
- **Context Cues:** Include enough context to avoid ambiguity
- **Mnemonic Hints:** Add memory aids in extra field (revealed after answer)
- **Sources:** Tag cards with source (textbook chapter, lecture number) for later reference
- **Personal Connection:** Relate to personal experience when possible

### Scheduling Discipline

- **Review Before New:** Always complete due reviews before adding new cards
- **Sustainable Pace:** Set new card limits you can maintain during busy periods
- **Vacation Mode:** Reduce new cards to zero before breaks, focus on reviews only
- **Gradual Ramp-Up:** Start with 5-10 new cards/day, increase slowly

### Deck Maintenance

- **Regular Leech Review:** Weekly check for cards failed `>` 4 times
- **Update Outdated Cards:** Revise when information becomes obsolete
- **Delete Low-Value Cards:** Remove trivial or non-essential cards after 6 months
- **Tag Ruthlessly:** Use tags for exams, priority, subject, difficulty

### Advanced Optimization

- **Retention Target Tuning:** Adjust desired retention based on importance (90% for critical, 80% for nice-to-know)
- **Load Balance:** Use fuzz factor or load balancer add-ons
- **Sibling Spacing:** Bury related cards to avoid pattern recognition
- **Optimize Ease Factor:** Reset ease for old decks imported from other sources

## Common Pitfalls

### Card Quality Issues

**Recognition vs. Recall:** Avoid cards you can answer by pattern-matching

❌ "The capital of France is ____" (too easy to guess from context)
✅ "What is the capital of France?" (forces retrieval)

**Orphan Facts:** Isolated information without conceptual framework

- Solution: Add "big picture" cards explaining relationships
- Create "map" cards showing how facts connect

**Overly Complex Cards:** Multi-step reasoning required

- Solution: Break into prerequisite cards
- Use cloze deletions for step-by-step processes

### Scheduling Problems

**Ease Hell:** Repeatedly hitting "Hard" or "Again" creates very low ease factors

- Cards get stuck in frequent review cycles
- Solution: Use "Set Ease" add-on to reset to 250%, or rewrite card

**Backlog Spiral:** Missing reviews creates overwhelming due counts

- Solution: Use filtered deck to gradually work through backlog
- Reduce new cards to zero until caught up

**Premature Optimization:** Obsessing over algorithm settings instead of studying

- Default settings work well for most learners
- Focus on card quality and daily consistency first

### Workflow Issues

**Passive Card Consumption:** Using pre-made decks without understanding

- Solution: Always edit or create your own cards from source material
- Pre-made decks are good starting points, not final product

**Review Procrastination:** Skipping days due to large review count

- Solution: Time-box reviews (30 minutes/day) rather than "complete all reviews"
- Better to maintain streak with partial reviews than break habit

**No Application:** Only memorizing facts without using knowledge

- Solution: Combine SRS with practice problems, projects, teaching
- SRS is foundation, not complete learning system

## Startup Implications

### Product Design Considerations

**Adaptive Algorithms:**

- Modern learners expect FSRS-level sophistication (not just SM-2)
- Personalization based on individual forgetting curves
- Differentiate difficulty by subject domain (languages vs. medical terminology)

**User Experience:**

- Reduce friction in card creation (templates, AI-assisted generation)
- Mobile-first design (reviews happen during commutes, waiting)
- Gamification without sacrificing effectiveness (streaks, XP, but preserve spacing integrity)

**Integration Opportunities:**

- Combine with note-taking tools (RemNote model)
- Auto-generate cards from textbooks, lectures, videos (AI extraction)
- Community decks with quality curation (Reddit-style upvoting)

### Market Positioning

**Learner Segments:**

- **Students (K-12, University):** Exam preparation, language learning, STEM subjects
- **Professionals:** Certification prep (medical boards, bar exam, professional licenses)
- **Lifelong Learners:** Language enthusiasts, hobbyists, retirees

**Competitive Advantages:**

- Superior algorithm (FSRS baseline, ML-enhanced personalization)
- Seamless multi-platform sync
- Content marketplace (high-quality pre-made decks)
- Analytics and insights (retention stats, time-to-mastery predictions)

### Technical Challenges

**Scheduling at Scale:**

- Efficient interval calculations for millions of cards
- Load balancing across user base (server costs)
- Offline-first with sync conflict resolution

**Data Privacy:**

- Personal learning data is sensitive
- Local-first architecture vs. cloud analytics trade-off

**Algorithm Transparency:**

- Users want control over scheduling
- Balance simplicity (hidden algorithm) vs. customization (exposed parameters)

## References

### Foundational Research

- Ebbinghaus, H. (1885). *Memory: A Contribution to Experimental Psychology*
- Bahrick, H. P., Bahrick, L. E., Bahrick, A. S., & Bahrick, P. E. (1993). Maintenance of foreign language vocabulary and the spacing effect. *Psychological Science, 4*(5), 316-321
- Cepeda, N. J., Pashler, H., Vul, E., Wixted, J. T., & Rohrer, D. (2006). Distributed practice in verbal recall tasks: A review and quantitative synthesis. *Psychological Bulletin, 132*(3), 354-380
- Bjork, R. A., & Bjork, E. L. (2011). Making things hard on yourself, but in a good way: Creating desirable difficulties to enhance learning. *Psychology and the Real World, 2*, 59-68

### Algorithm Documentation

- Wozniak, P. A. (1990). SuperMemo 2 Algorithm. [https://www.supermemo.com/en/archives1990-2015/english/ol/sm2](https://www.supermemo.com/en/archives1990-2015/english/ol/sm2)
- Wozniak, P. A., & Gorzelanczyk, E. J. (1994). Optimization of repetition spacing in the practice of learning. *Acta Neurobiologiae Experimentalis, 54*, 59-62
- FSRS Documentation: [https://github.com/open-spaced-repetition/fsrs4anki](https://github.com/open-spaced-repetition/fsrs4anki)

### Practical Guides

- Anki Manual: [https://docs.ankiweb.net/](https://docs.ankiweb.net/)
- Gwern Branwen: *Spaced Repetition for Efficient Learning* [https://gwern.net/spaced-repetition](https://gwern.net/spaced-repetition)
- Michael Nielsen: *Augmenting Long-term Memory* [http://augmentingcognition.com/ltm.html](http://augmentingcognition.com/ltm.html)

### Related Concepts

- [Memory](education/pedagogy/memory.md) - Overview of memory systems and techniques
- [Adaptive Learning Algorithms](education/pedagogy/adaptive-learning-algorithms.md) - How platforms personalize learning
- [Learning: How to Learn](education/pedagogy/course-learning-how-to-learn.md) - Broader learning strategies
