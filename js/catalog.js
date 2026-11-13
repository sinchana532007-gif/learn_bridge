"use strict";
/* Learning catalog, demo mentors, media storage and downloads */
/* ============================================================
   LEARNING CATALOG — everything a student can learn
   Each topic: short lesson (key points) + exercises to send to a mentor
   ============================================================ */
const T = (id, cat, emoji, name, level, summary, points, ex) => ({ id, cat, emoji, name, level, summary, points, ex: ex.map((e, i) => ({ id: id + "-" + (i + 1), topicId: id, cat, ...e })) });
const E = (kind, title, desc, extra = {}) => ({ kind, title, desc, ...extra });

const TOPICS = [
  /* ---------------- MUSIC ---------------- */
  T("carnatic", "music", "🪷", "Carnatic vocal", "Singing", "South Indian classical singing: sruti, swaras, varases and ragas.",
    ["Fix your sruti (Sa) and keep it the same every session.", "Sarali, janta and dhattu varases build accuracy and breath.", "Keep tala on your hand while singing; never let the beat drift."],
    [E("Practice", "Sarali varase 1–5", "Sing sarali varase 1 to 5 in Mayamalavagowla, Adi tala, in first and second speed. Record it.", { raga: "Mayamalavagowla", tala: "Adi", minutes: 10 }),
     E("Practice", "Janta varase in two speeds", "Sing janta varase 1 to 3 with clear double notes. Record and note which swaras wobble.", { raga: "Mayamalavagowla", tala: "Adi", minutes: 10 }),
     E("Practice", "Arohana and avarohana of Mohanam", "Sing the arohana and avarohana of Mohanam three times slowly, then a short free phrase.", { raga: "Mohanam", tala: "Adi", minutes: 8 })]),
  T("hindustani", "music", "🎼", "Hindustani vocal", "Singing", "North Indian classical singing: riyaz, alankars and raga basics.",
    ["Start with kharaj (low Sa) riyaz to build a steady voice.", "Alankars train pitch jumps and patterns.", "Each raga has a pakad, a catch phrase that identifies it."],
    [E("Practice", "Kharaj riyaz", "Hold low Sa, then Sa, Re, Ga with the reference tone for 10 minutes. Record the last 2 minutes.", { raga: "Yaman", tala: "Teentaal", minutes: 10 }),
     E("Practice", "Alankar in Bhupali", "Sing Sa Re Ga, Re Ga Pa pattern alankars in Bhupali, up and down, with Teentaal.", { raga: "Bhupali", tala: "Teentaal", minutes: 12 })]),
  T("western-vocal", "music", "🎤", "Western vocals", "Singing", "Pop and contemporary singing: breath support, range and tone.",
    ["Breathe low: belly out on the inhale, steady on the exhale.", "Lip trills and sirens warm up the whole range safely.", "Sing on pitch first, add style later."],
    [E("Practice", "Warm-up routine", "Do 2 minutes of lip trills, 2 of sirens and a 5-note scale up and down. Record the scale.", { minutes: 8 }),
     E("Practice", "One verse, one chorus", "Sing one verse and chorus of a song you like. Note where you run out of breath.", { minutes: 10 })]),
  T("piano", "music", "🎹", "Piano / Keyboard", "Instruments", "Keys, scales, chords and simple songs with both hands.",
    ["Use correct fingering: thumb tucks under on scales.", "Learn major chords as root, third and fifth.", "Practise hands separately before together."],
    [E("Practice", "C major scale, hands separately", "Play C major, two octaves, right hand then left hand at a slow steady pace. Record both.", { minutes: 10 }),
     E("Practice", "Four-chord progression", "Play C, G, Am, F as block chords, four beats each, with the left hand holding the root.", { minutes: 10 }),
     E("Mini-project", "Play a simple melody", "Learn Twinkle Twinkle or a song of your choice with right-hand melody and left-hand root notes. Record it.", { minutes: 15 })]),
  T("guitar", "music", "🎸", "Guitar", "Instruments", "Chords, strumming and clean chord changes.",
    ["Press just behind the fret, not on it.", "Change chords slowly first; speed comes later.", "Keep the strumming hand moving even on rests."],
    [E("Practice", "Open chords G, C, D, Em", "Play each chord and let every string ring. Record and note any buzzing strings.", { minutes: 10 }),
     E("Practice", "One-minute chord changes", "Switch between G and C for one minute. Count and write how many clean changes you made.", { minutes: 5 })]),
  T("violin", "music", "🎻", "Violin", "Instruments", "Posture, bowing and in-tune notes.",
    ["A relaxed bow hold gives a clean tone.", "Keep the bow straight and halfway between bridge and fingerboard.", "Check intonation against open strings."],
    [E("Practice", "Open-string long bows", "Play long bows on each open string, 4 beats each, aiming for an even sound. Record it.", { minutes: 10 }),
     E("Practice", "First-position scale", "Play a one-octave D major scale in first position slowly, checking each note against the reference tone.", { minutes: 10 })]),
  T("veena", "music", "🪕", "Veena", "Instruments", "Plucking, fretting and gamakas on the Saraswati veena.",
    ["Pluck with a consistent stroke of the index and middle fingers.", "Keep the left hand relaxed along the frets.", "Gamakas come from deflecting the string, practise them slowly."],
    [E("Practice", "Sarali varase on veena", "Play sarali varase 1 to 5 in Mayamalavagowla, Adi tala. Record it.", { raga: "Mayamalavagowla", tala: "Adi", minutes: 12 }),
     E("Practice", "Alankaram in Rupaka", "Play the first alankaram in Mohanam in Rupaka tala, keeping the beat steady.", { raga: "Mohanam", tala: "Rupaka", minutes: 12 })]),
  T("flute", "music", "🪈", "Flute", "Instruments", "Breath, tone and fingering on bansuri or Western flute.",
    ["A small, focused air stream gives a clearer tone.", "Cover holes with the pads of your fingers, not the tips.", "Long notes build tone better than fast passages."],
    [E("Practice", "Long tones", "Play Sa, Pa and upper Sa as long notes, 8 counts each. Record and note which note is weakest.", { minutes: 8 }),
     E("Practice", "Simple scale", "Play the Shankarabharanam (major) scale up and down slowly and evenly.", { raga: "Shankarabharanam", minutes: 10 })]),
  T("tabla", "music", "🥁", "Tabla", "Instruments", "Basic bols, thekas and keeping laya.",
    ["Learn each bol (Na, Ta, Ge, Ka) cleanly before combining.", "Say the bols aloud while playing.", "Practise with a metronome or lehra."],
    [E("Practice", "Teentaal theka", "Play the Teentaal theka at a slow tempo for 3 minutes without stopping. Record it.", { tala: "Teentaal", minutes: 8 }),
     E("Practice", "Keherwa theka", "Play Keherwa theka and one simple variation. Say the bols aloud.", { tala: "Keherwa", minutes: 8 })]),
  T("mridangam", "music", "🪘", "Mridangam", "Instruments", "Carnatic percussion: basic strokes and adi tala patterns.",
    ["Tha, Dhi, Thom and Nam are the first strokes to master.", "Balance right and left heads for a full sound.", "Count the tala on every practice."],
    [E("Practice", "Basic strokes", "Play Tha Dhi Thom Nam in four speeds. Record it.", { tala: "Adi", minutes: 10 }),
     E("Practice", "First adi tala pattern", "Play the first sollukattu pattern in Adi tala for two cycles.", { tala: "Adi", minutes: 10 })]),
  T("drums", "music", "🥁", "Drums", "Instruments", "Rock and pop grooves, fills and timing.",
    ["Count 1-and-2-and out loud.", "Keep the hi-hat steady; it is the clock.", "Practise with a metronome, starting slow."],
    [E("Practice", "Basic rock beat", "Play kick on 1 and 3, snare on 2 and 4, eighth notes on hi-hat for 2 minutes at 70 bpm. Record it.", { tala: "Keherwa", minutes: 8 }),
     E("Practice", "One-bar fill", "Play three bars of the groove, then a one-bar fill around the toms, and repeat four times.", { minutes: 8 })]),
  T("theory", "music", "📖", "Music theory", "Theory", "Notes, scales, intervals and chords explained simply.",
    ["An interval is the distance between two notes.", "A major scale follows the pattern whole, whole, half, whole, whole, whole, half.", "Chords are built by stacking thirds."],
    [E("Written", "Build three major scales", "Write out the notes of G, D and F major and explain which notes are sharp or flat.", { minutes: 15 }),
     E("Written", "Name the intervals", "Write the interval names from C to every other note of the C major scale.", { minutes: 10 })]),
  T("songwriting", "music", "✍️", "Songwriting", "Creative", "Lyrics, melody and song structure.",
    ["Most songs follow verse, chorus, verse, chorus, bridge, chorus.", "The chorus carries the main idea and the catchiest melody.", "Write about something specific you have felt."],
    [E("Mini-project", "Write a chorus", "Write a 4-line chorus with a clear title line. Record yourself singing or speaking it.", { minutes: 20 }),
     E("Mini-project", "Verse and chorus", "Add one verse that leads into your chorus. Attach the lyrics as notes and record a rough version.", { minutes: 30 })]),
  T("production", "music", "🎛️", "Music production", "Production", "Beats, loops, arrangement and mixing in a DAW.",
    ["Start with drums and bass, then add melody.", "Balance levels before adding effects.", "Finish short loops before starting big tracks."],
    [E("Mini-project", "8-bar loop", "Build an 8-bar loop with drums, bass and one melodic part. Export or record 30 seconds and upload it.", { minutes: 30 }),
     E("Practice", "Level-only mix", "Balance your loop using only volume faders. Upload before and after versions.", { minutes: 20 })]),

  /* ---------------- SPEAKING & COMMUNICATION ---------------- */
  T("self-intro", "speaking", "🙋", "Self-introduction", "Speaking", "Introduce yourself clearly and confidently.",
    ["Use present, past, future: who you are, what you did, what you want.", "End with one memorable detail.", "Keep it to 60–90 seconds."],
    [E("Speaking challenge", "60-second introduction", "Record a 60-second introduction: who you are, what you are learning, and one surprising fact.", { minutes: 1 }),
     E("Speaking challenge", "Interview introduction", "Record a 90-second introduction for a job or college interview.", { minutes: 2 })]),
  T("impromptu", "speaking", "🎲", "Impromptu speaking", "Speaking", "Speak well on a topic you did not prepare.",
    ["Use PREP: Point, Reason, Example, Point.", "Take a breath before you start.", "One clear example beats three vague ones."],
    [E("Impromptu", "Random topic, 90 seconds", "Generate a random topic, think for 15 seconds, and speak for 90 seconds using PREP.", { minutes: 2, topic: true }),
     E("Impromptu", "Two topics back to back", "Generate two topics and speak 60 seconds on each with no break.", { minutes: 3, topic: true })]),
  T("presentation", "speaking", "📊", "Presentation skills", "Speaking", "Structure and deliver a talk with slides or without.",
    ["Tell them what you will say, say it, then summarise.", "One idea per slide; slides support you, they do not replace you.", "Look at people, not the screen."],
    [E("Speaking challenge", "3-minute talk", "Give a 3-minute talk on a subject you know. Upload a photo of your notes or slides.", { minutes: 3 }),
     E("Speaking challenge", "Strong opening", "Record three different 20-second openings for the same talk: a question, a fact and a story.", { minutes: 2 })]),
  T("storytelling", "speaking", "📚", "Storytelling", "Speaking", "Tell stories people remember.",
    ["Every story needs a person, a problem and a change.", "Use specific details: names, places, sounds.", "End with what you learned."],
    [E("Speaking challenge", "A 2-minute personal story", "Tell a true 2-minute story about a moment that changed your mind about something.", { minutes: 2 }),
     E("Speaking challenge", "Retell a famous story", "Retell a well-known folk tale in your own words in 2 minutes, with voices for characters.", { minutes: 2 })]),
  T("debate", "speaking", "⚖️", "Debate", "Speaking", "Argue a position with reasons and rebuttals.",
    ["State your claim, give evidence, explain why it matters.", "Attack the argument, never the person.", "Anticipate the strongest counter-argument."],
    [E("Speaking challenge", "For and against", "Pick a topic and record 90 seconds for it, then 90 seconds against it.", { minutes: 3, topic: true }),
     E("Written", "Rebuttal plan", "Write the three strongest arguments against your view and your reply to each.", { minutes: 15 })]),
  T("interview", "speaking", "💼", "Interview preparation", "Communication", "Answer common interview questions with confidence.",
    ["Use STAR for experience questions: Situation, Task, Action, Result.", "Research the role and connect your answers to it.", "Prepare two questions to ask the interviewer."],
    [E("Speaking challenge", "Strengths and weaknesses", "Record answers to 'What are your strengths?' and 'What is a weakness you are working on?'.", { minutes: 3 }),
     E("Speaking challenge", "STAR answer", "Record a STAR answer to 'Tell me about a time you solved a problem'.", { minutes: 2 })]),
  T("group-discussion", "speaking", "👥", "Group discussion", "Communication", "Contribute clearly and politely in group discussions.",
    ["Enter with a point, not just agreement.", "Build on others: 'Adding to what Priya said…'.", "Summarise the discussion if you get the chance."],
    [E("Speaking challenge", "Opening a GD", "Generate a topic and record a 45-second opening that frames the discussion.", { minutes: 1, topic: true }),
     E("Speaking challenge", "Summarise a discussion", "Watch any panel discussion and record a 60-second summary of the main views.", { minutes: 2 })]),
  T("pronunciation", "speaking", "🗣️", "Pronunciation & accent", "Communication", "Clear English pronunciation and word stress.",
    ["Clarity matters more than accent.", "Stress the right syllable: PHO-to-graph, pho-TO-gra-phy.", "Slow down on long words."],
    [E("Practice", "Tongue twisters", "Record three tongue twisters, slowly then faster. Note which sounds are hardest.", { minutes: 5 }),
     E("Practice", "Word stress list", "Read this list aloud: photograph, photography, record (noun), record (verb), present (noun), present (verb), comfortable, vegetable.", { minutes: 5 })]),
  T("voice", "speaking", "🔊", "Voice modulation", "Communication", "Use pitch, pace, volume and pauses to hold attention.",
    ["Vary your pace: slow for important ideas.", "Pause before and after key points.", "Drop your pitch at the end of statements to sound sure."],
    [E("Practice", "Same sentence, five ways", "Say 'I did not say she took the money' five times, stressing a different word each time.", { minutes: 3 }),
     E("Practice", "Read a news paragraph", "Read a paragraph of news aloud like a broadcaster, with pauses marked. Upload a photo of your marked text.", { minutes: 4 })]),
  T("stage-fear", "speaking", "🦁", "Overcoming stage fear", "Confidence", "Manage nerves and speak with confidence.",
    ["Nerves are energy; slow breathing turns them into focus.", "Prepare your first 30 seconds word for word.", "Practise in front of a mirror, then one friend, then a group."],
    [E("Practice", "Box breathing + talk", "Do 1 minute of box breathing (4 in, 4 hold, 4 out, 4 hold), then record a 60-second talk.", { minutes: 3 }),
     E("Written", "Fear list", "Write what you fear most about speaking and one small step for each fear.", { minutes: 10 })]),
  T("listening", "speaking", "👂", "Active listening", "Communication", "Listen to understand, then respond well.",
    ["Paraphrase before you reply: 'So you are saying…'.", "Ask open questions.", "Notice tone and body language, not only words."],
    [E("Speaking challenge", "Paraphrase practice", "Listen to a 2-minute podcast clip and record a 45-second paraphrase.", { minutes: 2 }),
     E("Written", "Three open questions", "Write three open questions you could ask a new classmate, and why each works.", { minutes: 10 })]),
  T("writing", "speaking", "✉️", "Written communication", "Communication", "Clear emails and messages.",
    ["Put the request or main point in the first two lines.", "One email, one purpose.", "Read it aloud before sending."],
    [E("Written", "Request email", "Write an email to a teacher asking for an extension, with a clear reason and new date.", { minutes: 15 }),
     E("Written", "Rewrite for clarity", "Take a long message you sent recently and rewrite it in half the words.", { minutes: 15 })]),

  /* ---------------- PYTHON ---------------- */
  T("py-basics", "python", "🔤", "Variables & data types", "Beginner", "Store values with variables: int, float, str and bool.",
    ["A variable is a name that points to a value.", "type(x) tells you what kind of value x holds.", "Convert types with int(), float() and str()."],
    [E("Problem solving", "Personal info card", "Store your name, age and height in variables and print a neat card using f-strings.", { starter: "name = \"\"\nage = 0\nheight_m = 0.0\n\nprint(f\"Name: {name}\")\n" }),
     E("Debugging", "Fix the type error", "This code crashes. Fix it and explain why it happened.", { starter: "age = input(\"Your age: \")\nnext_year = age + 1\nprint(\"Next year you will be\", next_year)\n" })]),
  T("py-io", "python", "⌨️", "Input & output", "Beginner", "Read from the user and print formatted results.",
    ["input() always returns a string.", "print() can take several values and sep/end options.", "f-strings format numbers: f\"{x:.2f}\"."],
    [E("Problem solving", "Bill splitter", "Ask for a bill amount and number of people, then print each share to 2 decimals.", { starter: "total = float(input(\"Bill: \"))\npeople = int(input(\"People: \"))\n" }),
     E("Problem solving", "Temperature converter", "Convert Celsius to Fahrenheit and back based on the user's choice.")]),
  T("py-conditions", "python", "🔀", "Conditions (if / else)", "Beginner", "Make decisions with if, elif and else.",
    ["Comparison operators: ==, !=, <, >, <=, >=.", "Combine conditions with and, or, not.", "Only the first true branch runs."],
    [E("Problem solving", "Grade calculator", "Given marks out of 100, print the grade: A (90+), B (75+), C (60+), D (40+) or F.", { starter: "marks = int(input(\"Marks: \"))\n" }),
     E("Debugging", "Leap year bug", "This leap year check is wrong for 1900 and 2000. Fix it.", { starter: "year = int(input(\"Year: \"))\nif year % 4 == 0:\n    print(\"Leap year\")\nelse:\n    print(\"Not a leap year\")\n" })]),
  T("py-loops", "python", "🔁", "Loops", "Beginner", "Repeat work with for and while loops.",
    ["for loops walk through a sequence or range().", "while loops run until a condition becomes false.", "break stops a loop; continue skips to the next round."],
    [E("Problem solving", "Multiplication table", "Print the multiplication table of any number from 1 to 12, neatly aligned."),
     E("Debugging", "Fix the average", "This function should average a list but gives the wrong answer and crashes on an empty list. Fix it.", { starter: "def average(values):\n    total = 0\n    for i in range(1, len(values)):\n        total += values[i]\n    return total / len(values)\n\nprint(average([4, 8, 6]))   # expected 6.0\nprint(average([]))\n" }),
     E("Mini-project", "Number guessing game", "The computer picks 1–50; the player guesses with higher/lower hints. Show the number of attempts.", { starter: "import random\n\nsecret = random.randint(1, 50)\n" })]),
  T("py-functions", "python", "🧩", "Functions", "Beginner", "Package code into reusable functions.",
    ["def name(params): defines a function; return sends a value back.", "Default parameters make arguments optional.", "A function should do one job."],
    [E("Problem solving", "is_prime(n)", "Write is_prime(n) and use it to print all primes below 100."),
     E("Problem solving", "Simple calculator", "Write add, subtract, multiply and divide functions and a menu that uses them. Handle divide by zero.")]),
  T("py-strings", "python", "🧵", "Strings", "Beginner", "Slice, search and transform text.",
    ["Strings are sequences: s[0], s[-1], s[1:4].", "Useful methods: lower, upper, strip, split, join, replace.", "Strings are immutable; methods return new strings."],
    [E("Problem solving", "Palindrome checker", "Check whether a sentence is a palindrome, ignoring spaces, case and punctuation."),
     E("Problem solving", "Vowel counter", "Count each vowel in a sentence and print the counts.")]),
  T("py-lists", "python", "📋", "Lists & tuples", "Intermediate", "Store ordered collections and work with them.",
    ["Lists are mutable; tuples are not.", "append, insert, remove, pop, sort change a list.", "List comprehensions: [x * 2 for x in nums if x > 0]."],
    [E("Problem solving", "Second largest", "Find the second largest number in a list without using sort()."),
     E("Debugging", "The shared list surprise", "Each call should start with a new cart, but items pile up. Explain and fix.", { starter: "def add_item(item, cart=[]):\n    cart.append(item)\n    return cart\n\nprint(add_item(\"pen\"))\nprint(add_item(\"book\"))   # expected ['book']\n" })]),
  T("py-dicts", "python", "🗂️", "Dictionaries & sets", "Intermediate", "Look up values by key and remove duplicates.",
    ["dict: {key: value}; get() avoids KeyError.", "Loop with .items() to get key and value together.", "Sets hold unique items and support union and intersection."],
    [E("Problem solving", "Word frequency", "Print the 5 most common words in a paragraph, ignoring case and punctuation.", { starter: "text = \"\"\"Paste a paragraph here.\"\"\"\n" }),
     E("Problem solving", "Phone book", "Build a phone book with add, search, update and delete using a dictionary.")]),
  T("py-files", "python", "📁", "File handling", "Intermediate", "Read and write text, CSV and JSON files.",
    ["Use with open(...) as f: so files close automatically.", "Modes: 'r' read, 'w' write, 'a' append.", "json.dump and json.load save and load Python data."],
    [E("Mini-project", "To-do list saved to a file", "A command-line to-do app with add, list, complete and delete that saves to todos.json.", { starter: "import json\nfrom pathlib import Path\n\nFILE = Path(\"todos.json\")\n" }),
     E("Problem solving", "Marks from CSV", "Read a CSV of student marks and print the average and topper.")]),
  T("py-errors", "python", "🐞", "Errors & debugging", "Intermediate", "Read tracebacks and handle errors gracefully.",
    ["Read the traceback from the last line up.", "try / except catches specific errors; avoid bare except.", "print() and the debugger show what values really are."],
    [E("Debugging", "Safe number input", "Keep asking until the user types a valid whole number, using try/except ValueError."),
     E("Debugging", "Find three bugs", "This program has three bugs. Find, fix and explain each one.", { starter: "def total_price(items):\n    total = 0\n    for name, price in items:\n        total =+ price\n    return totl\n\nprint(total_price([(\"pen\", 10), (\"book\", \"50\")]))\n" })]),
  T("py-oop", "python", "🏗️", "Object-oriented programming", "Advanced", "Model real things with classes and objects.",
    ["A class is a blueprint; an object is one instance.", "__init__ sets up attributes; methods use self.", "Inheritance reuses code from a parent class."],
    [E("Problem solving", "Bank account class", "Write a BankAccount class with deposit, withdraw (no overdraft) and a balance history."),
     E("Mini-project", "Library system", "Classes for Book, Member and Library with borrowing and returning rules.")]),
  T("py-modules", "python", "📦", "Modules & standard library", "Advanced", "Use Python's built-in modules and organise your own.",
    ["import brings in modules: math, random, datetime, collections.", "if __name__ == \"__main__\": runs code only when executed directly.", "Split big programs into modules by responsibility."],
    [E("Mini-project", "CSV report tool", "A script using argparse that totals expenses by category and month from a CSV.", { starter: "import argparse\nimport csv\nfrom collections import defaultdict\n" }),
     E("Problem solving", "Days until birthday", "Use datetime to print how many days until your next birthday.")]),
  T("py-algorithms", "python", "🧠", "Recursion & algorithms", "Advanced", "Think in steps: recursion, searching and sorting.",
    ["Every recursive function needs a base case.", "Binary search halves the search space each step.", "Big-O describes how time grows with input size."],
    [E("Problem solving", "Build an LRU cache", "Write an LRUCache class with O(1) get and put, without functools.", { starter: "class LRUCache:\n    def __init__(self, capacity):\n        pass\n\n    def get(self, key):\n        pass\n\n    def put(self, key, value):\n        pass\n" }),
     E("Debugging", "Late-binding lambdas", "Every function prints 4 instead of 0 to 4. Explain closure late binding and fix it two ways.", { starter: "funcs = [lambda: i for i in range(5)]\nprint([f() for f in funcs])\n" }),
     E("Problem solving", "Binary search", "Implement binary search both iteratively and recursively, with tests.")]),
  T("py-projects", "python", "🚀", "Mini-projects", "Projects", "Put everything together in small complete programs.",
    ["Plan the features before writing code.", "Build the smallest working version first.", "Add one feature at a time and test it."],
    [E("Mini-project", "Quiz game", "A quiz with 10 questions stored in a list of dictionaries, scoring and a final result."),
     E("Mini-project", "Expense tracker", "Add expenses with category and date, show totals, and save to a file."),
     E("Mini-project", "Password generator", "Generate strong passwords with options for length, digits and symbols.")])
];
const TOPIC = (id) => TOPICS.find(t => t.id === id);
const EXERCISE = (id) => { for (const t of TOPICS) { const e = t.ex.find(x => x.id === id); if (e) return e; } return null; };
const topicsOf = (cat) => TOPICS.filter(t => t.cat === cat);

const REFS = {
  music: [["Carnatic music (Wikipedia)", "https://en.wikipedia.org/wiki/Carnatic_music"], ["Raga (Wikipedia)", "https://en.wikipedia.org/wiki/Raga"], ["Tala (Wikipedia)", "https://en.wikipedia.org/wiki/Tala_(music)"], ["musictheory.net lessons", "https://www.musictheory.net/lessons"]],
  speaking: [["Toastmasters International", "https://www.toastmasters.org/"], ["TED talks on public speaking", "https://www.ted.com/playlists/226/before_public_speaking"]],
  python: [["Official Python tutorial", "https://docs.python.org/3/tutorial/"], ["PEP 8 style guide", "https://peps.python.org/pep-0008/"], ["Python built-in functions", "https://docs.python.org/3/library/functions.html"]]
};

/* ---------- demo mentors (details for the team are in the separate reference file) ---------- */
const DEMO_PASS = "mentor123";
const SEED_MENTORS = [
  { name: "Anjali Rao", email: "anjali@learnbridge.demo", category: "music", topics: ["carnatic", "hindustani", "theory"], skills: ["Carnatic vocal", "Sruti alignment", "Varnams", "Voice care"], experience: 12, mode: "online", location: "Bengaluru", availability: "Mon, Wed, Fri, 6 to 8 pm", bio: "Carnatic vocalist and teacher. I help beginners find a comfortable sruti and build steady, confident singing.", stories: ["Took a student from no training to singing her first varnam on stage in 14 months."] },
  { name: "Kiran Menon", email: "kiran@learnbridge.demo", category: "music", topics: ["veena", "violin", "flute", "mridangam"], skills: ["Veena", "Violin", "Flute", "Mridangam"], experience: 8, mode: "offline", location: "Kochi", availability: "Weekends, 10 am to 1 pm", bio: "Multi-instrumentalist in Carnatic music. Clean technique and steady laya.", stories: ["Students regularly perform at the annual community music festival."] },
  { name: "Daniel D'Souza", email: "daniel@learnbridge.demo", category: "music", topics: ["piano", "guitar", "western-vocal", "drums"], skills: ["Piano", "Guitar", "Western vocals", "Drums"], experience: 10, mode: "online", location: "Goa", availability: "Tue to Sat, 4 to 8 pm", bio: "Band musician and teacher. We learn songs you love while building real technique.", stories: ["Coached a school band that won the inter-school music fest."] },
  { name: "Suresh Bhat", email: "suresh@learnbridge.demo", category: "music", topics: ["tabla", "mridangam", "drums", "theory"], skills: ["Tabla", "Laya", "Rhythm theory"], experience: 15, mode: "offline", location: "Hubballi", availability: "Daily, 7 to 9 am", bio: "Tabla player with fifteen years of teaching. Rhythm first, speed later.", stories: ["Five students now accompany concert artists."] },
  { name: "Farah Qureshi", email: "farah@learnbridge.demo", category: "music", topics: ["production", "songwriting", "theory"], skills: ["Music production", "Mixing", "Songwriting"], experience: 6, mode: "online", location: "Pune", availability: "Tue and Thu evenings", bio: "Producer and songwriter. I teach you to finish tracks, not just start them.", stories: ["A student's first EP, made in our sessions, reached 50,000 streams."] },
  { name: "Meera Iyer", email: "meera@learnbridge.demo", category: "speaking", topics: ["self-intro", "impromptu", "presentation", "storytelling", "stage-fear", "voice"], skills: ["Public speaking", "Storytelling", "Stage fear"], experience: 10, mode: "online", location: "Chennai", availability: "Daily, 7 to 9 pm", bio: "Speaking coach for students and professionals. Practical drills, honest feedback.", stories: ["Helped a shy engineering student win an inter-college debate."] },
  { name: "Arjun Shetty", email: "arjun@learnbridge.demo", category: "speaking", topics: ["interview", "group-discussion", "self-intro", "writing"], skills: ["Interview skills", "Group discussion", "Email writing"], experience: 7, mode: "offline", location: "Mangaluru", availability: "Sat and Sun, 4 to 7 pm", bio: "HR trainer turned communication mentor. I prepare you for interviews and group discussions.", stories: ["Most of my students clear their campus interview on the first attempt."] },
  { name: "Leena Thomas", email: "leena@learnbridge.demo", category: "speaking", topics: ["pronunciation", "listening", "debate", "voice"], skills: ["Pronunciation", "Debate", "Listening"], experience: 9, mode: "online", location: "Thiruvananthapuram", availability: "Mon to Fri, 5 to 7 pm", bio: "English and debate coach. Clear speech, strong arguments.", stories: ["Coached state-level debate finalists three years running."] },
  { name: "Nikhil Joshi", email: "nikhil@learnbridge.demo", category: "python", topics: ["py-basics", "py-io", "py-conditions", "py-loops", "py-functions", "py-strings"], skills: ["Python basics", "Problem solving", "Patience"], experience: 9, mode: "online", location: "Hyderabad", availability: "Mon to Fri, 5 to 7 pm", bio: "I teach Python to absolute beginners. No question is too small.", stories: ["Guided an accountant to automate her monthly reports in Python."] },
  { name: "Divya Kulkarni", email: "divya@learnbridge.demo", category: "python", topics: ["py-oop", "py-modules", "py-algorithms", "py-dicts", "py-files"], skills: ["Advanced Python", "Data structures", "Testing"], experience: 11, mode: "online", location: "Bengaluru", availability: "Weekends, flexible", bio: "Senior backend engineer mentoring intermediate and advanced learners.", stories: ["Mentees now work at product companies and open-source projects."] },
  { name: "Rahul Gowda", email: "rahul@learnbridge.demo", category: "python", topics: ["py-errors", "py-projects", "py-lists", "py-loops"], skills: ["Debugging", "Mini-projects", "Automation"], experience: 5, mode: "offline", location: "Delhi", availability: "Tue, Thu, Sat mornings", bio: "Bring me your broken code and we will fix it together, step by step.", stories: ["Built 30+ small projects with students, from bots to budget trackers."] }
];
async function seedIfNeeded() {
  const d = db(); let changed = false;
  for (const m of SEED_MENTORS) {
    if (d.mentors.some(x => x.email === m.email)) continue;
    const salt = uid("s");
    d.mentors.push({ id: uid("m"), ...m, salt, passHash: await hashPass(DEMO_PASS, salt), demo: true, createdAt: Date.now() });
    changed = true;
  }
  if (changed) save();
}

/* ---------- media: platform asset store when available, else this browser (IndexedDB) ---------- */
const capCache = {};
function getCap(name) {
  if (!(name in capCache)) capCache[name] = (async () => { try { return window.claude?.use ? await window.claude.use(name) : null; } catch (e) { return null; } })();
  return capCache[name];
}
const IDB = (() => {
  let p = null;
  const open = () => p || (p = new Promise((res, rej) => { const r = indexedDB.open("learnbridge_media", 1); r.onupgradeneeded = () => r.result.createObjectStore("files"); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); }));
  return {
    async put(id, blob) { const d = await open(); return new Promise((res, rej) => { const tx = d.transaction("files", "readwrite"); tx.objectStore("files").put(blob, id); tx.oncomplete = res; tx.onerror = () => rej(tx.error); }); },
    async get(id) { const d = await open(); return new Promise((res, rej) => { const r = d.transaction("files").objectStore("files").get(id); r.onsuccess = () => res(r.result || null); r.onerror = () => rej(r.error); }); }
  };
})();
const EXT_MIME = { png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg", gif: "image/gif", webp: "image/webp", mp4: "video/mp4", m4a: "audio/mp4", webm: "video/webm", mov: "video/quicktime", mp3: "audio/mpeg", wav: "audio/wav", ogg: "audio/ogg", pdf: "application/pdf", txt: "text/plain", md: "text/markdown", csv: "text/csv", json: "application/json", py: "text/plain" };
function guessMime(name, t) { if (t) return t.split(";")[0]; const ext = (name.split(".").pop() || "").toLowerCase(); return EXT_MIME[ext] || "application/octet-stream"; }
function assetType(mime) {
  if (/^image\/(png|jpeg|gif|webp)$/.test(mime)) return mime;
  if (mime === "video/mp4" || mime === "audio/mp4" || mime === "audio/x-m4a") return "video/mp4";
  if (mime === "video/webm" || mime === "audio/webm") return "video/webm";
  if (mime === "application/pdf") return mime;
  if (/^(text\/plain|text\/markdown|text\/csv|application\/json)$/.test(mime)) return mime;
  return null;
}
const MAX_FILE = 20 * 1024 * 1024;
async function storeFile(blob, name, owner) {
  const mime = guessMime(name, blob.type);
  if (blob.size > 60 * 1024 * 1024) throw new Error("too_large");
  const meta = { id: uid("f"), name: name || "file", mime, size: blob.size, owner, createdAt: Date.now() };
  const assets = await getCap("assets"), at = assetType(mime);
  if (assets && at && blob.size <= MAX_FILE) {
    try { const r = await assets.upload(blob, { type: at }); meta.store = "asset"; meta.assetId = r.id; } catch (e) { /* fall back to this browser */ }
  }
  if (!meta.store) { await IDB.put(meta.id, blob); meta.store = "idb"; }
  db().media.push(meta);
  return meta.id;
}
async function storeFiles(list, owner) { const ids = []; for (const f of list) ids.push(await storeFile(f.blob || f, f.name || "file", owner)); return ids; }
const mediaMeta = (id) => db().media.find(m => m.id === id);
async function mediaBlob(meta) {
  if (meta.store === "asset") { const r = await fetch("/_blob/" + meta.assetId); if (!r.ok) throw new Error("fetch"); return r.blob(); }
  return IDB.get(meta.id);
}
const blobToDataUrl = (b) => new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(r.result); r.onerror = rej; r.readAsDataURL(b); });
async function mediaSrc(meta) {
  if (meta.store === "asset") return "/_blob/" + meta.assetId;
  const b = await IDB.get(meta.id); if (!b) return null;
  return blobToDataUrl(b); // data: URLs play reliably inside embedded views
}
const DL_OK = ["gif", "png", "jpg", "jpeg", "webp", "mp4", "webm", "txt", "json", "md", "csv", "svg", "pdf", "html", "docx", "pptx", "xlsx", "zip"];
function dlName(meta) {
  let base = (meta.name || "file").replace(/[^\w.\- ]+/g, "_"), ext = (base.includes(".") ? base.split(".").pop() : "").toLowerCase();
  if (DL_OK.includes(ext)) return base;
  const m = meta.mime;
  const mapped = /webm/.test(m) ? "webm" : /mp4|m4a/.test(m) ? "mp4" : m === "image/jpeg" ? "jpg" : m === "image/png" ? "png" : m === "application/pdf" ? "pdf" : /^text\//.test(m) ? "txt" : null;
  return mapped ? base.replace(/\.[^.]*$/, "") + "." + mapped : null;
}
async function downloadMedia(id) {
  const meta = mediaMeta(id); if (!meta) return toast("File not found on this device.");
  const name = dlName(meta);
  if (!name) { return toast("This file type (" + meta.mime + ") can be played here but not saved. Use MP4, WebM, JPG, PNG, PDF or TXT."); }
  let blob; try { blob = await mediaBlob(meta); } catch (e) { blob = null; }
  if (!blob) return toast("Could not read the file.");
  offerDownload(name, blob);
}
async function offerDownload(filename, data) {
  const cap = await getCap("downloads");
  if (cap) {
    try { await cap.save({ filename, data }); toast("Saved " + filename); return; }
    catch (e) {
      if (e?.code === "declined") return;
      if (e?.code === "rate_limited") return toast("A save prompt is already open.");
      if (e?.code === "rejected_extension") return toast("That file type cannot be saved here.");
    }
  }
  const blob = data instanceof Blob ? data : new Blob([data], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = await blobToDataUrl(blob); a.download = filename; a.target = "_blank";
  document.body.appendChild(a); a.click(); a.remove();
}
