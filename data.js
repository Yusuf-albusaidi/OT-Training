/* ============================================================
   TRAINING CONTENT  –  edit this file to add / change modules
   section: "policy"  = Must Know Policies
            "wi"      = OT Work Instructions
   practical: null, or { title, note, items:[...] }  -> competency
              checklist reference shown on the module (optional)
   ============================================================ */
window.SITE = {
  title: "OT New Nurse Theory Programme",
  hospital: "Sultan Qaboos University Hospital",
  department: "Operating Theatre",
  passMark: 80,
  examQuestions: 20,
  credit: "Created by Yousuf Al Busaidi — 11764"
};

window.MODULES = [

/* ---------------------------------------------------------- */
{
  id: "wi-023", section: "wi", code: "WI-23", title: "Blood Loss Estimation",
  doc: "Work Instruction 23 – Blood Loss Estimation (Issue A, Sept 2012)",
  owner: "Circulating Nurse and Anaesthetist",
  summary: "How to measure blood loss accurately by weighing sponges and measuring suction, so fluid and blood replacement can be guided.",
  minutes: 10,
  facts: [
    { k: "Conversion", v: "1 g = 1 ml" },
    { k: "Weigh", v: "Before sponges dry out" },
    { k: "Suction", v: "Minus irrigation fluid" },
    { k: "Report to", v: "Surgeon + Anaesthetist" }
  ],
  lessons: [
    { title: "Why and when we estimate",
      body: "The aim is a reliable way of judging how much blood has been lost, so the team can decide when to replace fluids and blood products.",
      points: [
        "Blood loss **must** be estimated for: critically ill or elderly patients, complex surgery, trauma, organ transplant, abnormal bleeding/clotting time, extensive liver or renal disease, and infants.",
        "Responsible: the **circulating nurse** and the **anaesthetist**."
      ] },
    { title: "Getting ready",
      points: [
        "The weight of the **dry sponges and the plastic bag** for soiled sponges must be known **before** the case (predetermined).",
        "The scale must read in **grams**; weight is converted to millilitres **1:1**.",
        "Always wear **PPE** when handling soiled sponges.",
        "“Sponges” means **gauze and laparotomy packs** – they are weighed **separately**.",
        "Weigh wet sponges **before they dry out**."
      ],
      why: "Sponges lose water as they dry, so a late weighing under-estimates the real blood loss." },
    { title: "Weighing the sponges – step by step",
      steps: [
        "Adjust the scale to **zero** so the reading is correct.",
        "Place the bag with the soiled sponges on the scale.",
        "**Subtract** the dry weight from the wet weight. The result is the blood loss (1 g = 1 ml).",
        "Record it on the **sponge count board** in the space for that type of sponge.",
        "Add each new weight to the one before, so a **running total** is always available."
      ] },
    { title: "Suction bottles and visual estimate",
      points: [
        "Measure the blood in the suction bottles at **regular intervals**.",
        "**Subtract the irrigation fluid** that was used – only blood counts.",
        "**Add** the suction blood to the sponge total to get the accurate estimate.",
        "Blood on **drapes and floor** is estimated visually by the **anaesthetist**."
      ] },
    { title: "Reporting and documenting",
      points: [
        "Report the total (sponges + suction) to the **surgeon and the anaesthetist**.",
        "At the end of the procedure record the total in the **Intra-operative Nursing Record** and the **OT register**.",
        "Related document: **Surgical Counts SQUH-NUR (THS) WI-06**."
      ] }
  ],
  questions: [
    { q: "Which of these patients must have blood loss estimated?",
      o: ["An adult having a minor skin lesion excision", "An infant", "A patient having a routine dressing change", "A healthy adult for a short diagnostic procedure"],
      a: 1, why: "Infants are on the list, along with critically ill/elderly, complex surgery, trauma, transplant, abnormal clotting and extensive liver/renal disease." },
    { q: "The weighing scale reads in grams. How is this converted to blood loss?",
      o: ["1 g = 2 ml", "1 g = 1 ml", "1 g = 0.5 ml", "It is not converted – grams are recorded"],
      a: 1, why: "The work instruction converts on a 1:1 basis: 1 gram = 1 ml." },
    { q: "Dry sponges + bag weigh 250 g. The bag with soiled sponges weighs 640 g. What is the blood loss from the sponges?",
      o: ["250 ml", "390 ml", "640 ml", "890 ml"],
      a: 1, why: "640 g – 250 g = 390 g, which is 390 ml." },
    { q: "What must you do first before placing the bag of soiled sponges on the scale?",
      o: ["Squeeze the sponges", "Adjust the scale to zero", "Tell the surgeon", "Record the time"],
      a: 1, why: "The scale is adjusted to zero to ensure a correct reading." },
    { q: "Why must wet sponges be weighed before they dry out?",
      o: ["Dry sponges are harder to count", "Drying reduces the weight and under-estimates blood loss", "Dry sponges cannot be placed in the bag", "The scale is damaged by dry sponges"],
      a: 1, why: "Evaporation lowers the weight, so the blood loss would look smaller than it really is." },
    { q: "Suction bottle volume is 1,200 ml and 800 ml of irrigation fluid was used. Sponge blood loss is 390 ml. What is the total blood loss?",
      o: ["390 ml", "790 ml", "1,200 ml", "1,590 ml"],
      a: 1, why: "Suction blood = 1,200 – 800 = 400 ml. Add the sponge loss: 400 + 390 = 790 ml." },
    { q: "Who estimates the blood on the drapes and the floor?",
      o: ["The scrub nurse", "The surgeon", "The anaesthetist", "The porter"],
      a: 2, why: "Visual inspection of blood on drapes and floor is estimated by the anaesthetist." },
    { q: "How are gauze and laparotomy packs weighed?",
      o: ["Together in one bag", "Separately", "Only if the surgeon asks", "They are not weighed"],
      a: 1, why: "Sponges include gauze and laparotomy packs and must be weighed separately." },
    { q: "At the end of the procedure, where is the total blood loss documented?",
      o: ["Only on the sponge count board", "Intra-operative Nursing Record and OT register", "Only in the anaesthetic chart", "On the suction bottle label"],
      a: 1, why: "The total is recorded in the Intra-operative Nursing Record and the OT register, and reported to the surgeon and anaesthetist." }
  ],
  practical: null
},

/* ---------------------------------------------------------- */
{
  id: "wi-024", section: "wi", code: "NWI-024", title: "Cidex-OPA for High Level Disinfection",
  doc: "NUR(THS)-NWI-024 – The Use of Cidex-OPA Solution for High Level Disinfection (Version 00)",
  owner: "Physicians, Nurses, CSSD technicians",
  summary: "Safe use of Cidex-OPA for heat-sensitive devices: cleaning first, soaking time, rinsing, test strips, logging and what to do after an exposure.",
  minutes: 15,
  facts: [
    { k: "Soak", v: "≥ 12 min at ≥ 20 °C (68 °F)" },
    { k: "Reuse life", v: "Maximum 14 days" },
    { k: "Rinse", v: "Sterile water ≥ 1 min, never reuse" },
    { k: "Test strip", v: "Dip 1 s · read at 90 s" }
  ],
  lessons: [
    { title: "Purpose and classification",
      body: "Cidex-OPA is used for **high level disinfection (HLD)** of heat-sensitive devices that cannot be sterilised by any other means. Users must be trained in HLD and in handling the solution.",
      points: [
        "**Critical** devices (enter sterile tissue or blood) must be **sterilised**.",
        "**Semi-critical** devices (touch intact mucous membranes) need **at least HLD**.",
        "**Non-critical** devices (touch only intact skin) need **low-level disinfection**.",
        "Solutions, equipment and supplies must be approved by the Hospital and Infection Control Committee."
      ] },
    { title: "Before the soak: protect, inspect, clean",
      points: [
        "Wear PPE: **gloves, eye protection and a fluid-repellent apron/gown**.",
        "Inspect and test the device first – leak test, check for cracks, check fibre-optic bundles.",
        "Clean blood, body fluids and lubricants off with **enzymatic solution (3E-zyme)** and manually clean in the detergent.",
        "Avoid knocking the scope on hard surfaces – it can damage the optic fibres.",
        "**Rinse and dry** before disinfecting."
      ],
      why: "Cleaning is the essential step: disinfectant cannot penetrate soil. Drying prevents the Cidex being diluted." },
    { title: "Storage and the solution in use",
      points: [
        "Store in the **original sealed container**, at controlled room temperature (59–86 °F), in a **well-ventilated area**; air-conditioned rooms need **at least 10 air changes per hour**.",
        "Once opened, the remaining solution may be kept in its original container for up to **75 days**.",
        "Pour into **covered** soaking containers. Record the **date poured** and the expiry – the poured solution may be reused for a **maximum of 14 days**.",
        "Keep lids **on** at all times except when adding or removing instruments."
      ],
      why: "Lids and ventilation reduce staff exposure to vapour." },
    { title: "The disinfection and rinse",
      steps: [
        "Dry the device completely – no water on it.",
        "**Completely immerse** it, filling all lumens and removing air pockets.",
        "Soak for **at least 12 minutes at 20 °C (68 °F) or higher**.",
        "Record soak time, date and patient details in the log.",
        "Remove and rinse thoroughly in **sterile water**, fully immersed, for **at least 1 minute**.",
        "**Discard** the rinse water. Never reuse it."
      ],
      why: "Rinsing removes residue that could stain or cause irritation or chemical burns on patient contact." },
    { title: "Checking the solution: test strips",
      body: "The solution must stay above the **Minimum Effective Concentration of 0.3%**. Check it with Cidex-OPA test strips during its reuse life.",
      points: [
        "Do **not** remove the silica-gel desiccant. If the bottle is open **more than 30 minutes**, discard the strips and use a fresh bottle.",
        "Do not use strips **90 days after opening**. Record the opening and expiry date in the log.",
        "Dip the indicator pad into the solution for **1 second** only, then remove.",
        "Use a timer and read the colour at **90 seconds** – earlier or later gives a wrong result.",
        "**Any shade of purple = effective.** If **blue** appears on the pad (apart from the top line) – **discard the solution**.",
        "Record the result in the log book."
      ] },
    { title: "Records, spills and exposure",
      points: [
        "The instrument tracking log must include: **model/serial number or colour code**, **patient name and ID**, **date and type of procedure**, and the **signature** of the person reprocessing.",
        "**Spills / disposal:** pour down the drain while running **plenty of water**. Rinse the bottle and bin it with regular trash; test strips also go in regular trash.",
        "**Eye splash:** rinse thoroughly for **15 minutes**. If contact lenses are worn seek medical advice. **Write an incident report.**",
        "**Skin splash:** wash with soap and water and rinse for **10 minutes**. Remove and wash contaminated clothing. Seek medical attention if irritation develops.",
        "Support documents: MSDS (safety data sheet) and the Cidex log book."
      ] }
  ],
  questions: [
    { q: "A device touches intact mucous membranes but does not penetrate sterile tissue. What is the minimum level of reprocessing?",
      o: ["Low-level disinfection", "High level disinfection", "No reprocessing", "Wipe with alcohol"],
      a: 1, why: "Semi-critical devices need at least high level disinfection." },
    { q: "What is the minimum soak time in Cidex-OPA at 20 °C (68 °F) or higher?",
      o: ["1 minute", "5 minutes", "12 minutes", "30 minutes"],
      a: 2, why: "Immerse for a minimum of 12 minutes at 20 °C or higher." },
    { q: "How long may poured Cidex-OPA be reused?",
      o: ["Up to 3 days", "Up to 7 days", "Up to 14 days", "Up to 75 days"],
      a: 2, why: "Reuse is allowed for a maximum of 14 days. (75 days applies to the opened bottle kept in its original container.)" },
    { q: "Scenario: Cidex was poured into the soaking tray 16 days ago and today's test strip shows purple. What should you do?",
      o: ["Use it – purple means effective", "Use it but extend the soak time", "Discard it – the 14-day reuse limit has passed", "Add fresh Cidex to the tray"],
      a: 2, why: "Even if the strip is purple, the solution must not be used beyond 14 days." },
    { q: "When do you read the test-strip result?",
      o: ["Immediately", "After 30 seconds", "After 90 seconds using a timer", "After 5 minutes"],
      a: 2, why: "Read at 90 seconds. Reading earlier or later can cause test failure." },
    { q: "The indicator pad shows blue (apart from the top line). What does this mean?",
      o: ["The solution is effective", "The solution must be discarded", "Re-test after 10 minutes", "Add more strips"],
      a: 1, why: "Any blue on the pad means the concentration is too low – discard the solution. Any shade of purple is acceptable." },
    { q: "The bottle of test strips was left open for 40 minutes. What must you do?",
      o: ["Use them as normal", "Use them only for the next test", "Discard the strips and use a new bottle", "Dry them in the sun"],
      a: 2, why: "If the container is open for more than 30 minutes, discard the strips. They are moisture sensitive." },
    { q: "How must the device be rinsed after removal from Cidex-OPA?",
      o: ["Under running tap water for 10 seconds", "Fully immersed in sterile water for at least 1 minute, then discard the water", "Wiped with a damp cloth", "In the same Cidex tray"],
      a: 1, why: "Rinse in sterile water for at least one minute, discard the water and never reuse it." },
    { q: "Cidex-OPA splashes into your eyes. What is the first action?",
      o: ["Rinse the eyes thoroughly for 15 minutes", "Rinse for 1 minute", "Wipe with a tissue", "Wait to see if irritation develops"],
      a: 0, why: "Rinse for 15 minutes, seek medical advice if contact lenses are worn, and write an incident report." },
    { q: "Cidex-OPA is spilled on your skin. How long do you rinse after washing with soap and water?",
      o: ["10 minutes", "1 minute", "30 seconds", "No rinse needed"],
      a: 0, why: "Wash with soap and water and rinse for 10 minutes, remove contaminated clothing, and seek medical attention if irritation develops." },
    { q: "What must be done to a scope before it goes into the Cidex-OPA?",
      o: ["Nothing – Cidex cleans it", "Clean with enzymatic solution, rinse and dry it", "Wrap it in a towel", "Soak it in saline"],
      a: 1, why: "Blood and body fluids must be removed with enzymatic solution first; the device is rinsed and dried so the Cidex is not diluted." },
    { q: "Which of these must be written in the instrument tracking log?",
      o: ["Surgeon's phone number", "Patient name and ID, date and type of procedure, and the signature of the person reprocessing", "Theatre number only", "The time of the last meal"],
      a: 1, why: "The log also includes the model/serial number or colour code of the instrument." }
  ],
  practical: null
},

/* ---------------------------------------------------------- */
{
  id: "wi-025", section: "wi", code: "WI-25", title: "Use of the Plasma Sterilizer",
  doc: "WI-25 – Use of Plasma Sterilizer (Sterrad)",
  owner: "All Theatre Nurses, Anaesthesia Technicians",
  summary: "Preparing, packing, loading and monitoring loads in the hydrogen-peroxide plasma sterilizer, and the items that must never go in.",
  minutes: 15,
  facts: [
    { k: "Cycles", v: "Standard 28 min · Advanced 38 min" },
    { k: "Biological test", v: "Daily, with the first load" },
    { k: "Packaging", v: "Polypropylene wrap or Tyvek only" },
    { k: "Pouch expiry", v: "One year" }
  ],
  lessons: [
    { title: "What it is and the golden rules",
      body: "The plasma sterilizer uses **hydrogen peroxide and low-temperature gas plasma** to sterilise devices that are sensitive to heat and moisture, without toxic residue.",
      points: [
        "Cycles: **Standard 28 minutes**, **Advanced 38 minutes**.",
        "The chamber must be **clean and free from debris**.",
        "Use **only polypropylene** wraps and pouches (Tyvek pouches), and only the **recommended trays and accessories**.",
        "Only **dry** items go in.",
        "Follow each device's IFU (Instructions For Use) for special preparation or disassembly.",
        "Any technical fault is reported to the engineering department (**HMD**)."
      ] },
    { title: "Instrument preparation",
      points: [
        "**Disassemble** according to the manufacturer's IFU.",
        "Remove all blood, tissue and soil with **enzymatic detergent**, then rinse thoroughly.",
        "**Dry completely** and inspect function. Medical-grade compressed air may help dry lumens.",
      ],
      why: "If an item is not clean it cannot be sterilised. Moisture can leave the device non-sterile or cancel the cycle." },
    { title: "Packaging",
      points: [
        "Use **Aptimax instrument trays** – designed for good diffusion of hydrogen peroxide gas.",
        "Wrap in **polypropylene wrap** or place in **Tyvek pouches**.",
        "Put a **Chemical Indicator (CI) strip** inside every tray and every pouch.",
        "Secure wrapped trays with **CI tape** – it changes from **red to gold or lighter** during the cycle.",
        "Single instruments go in **peel pouches**. Peel pouches are **not** placed inside wrapped trays.",
        "Write the contents on the CI tape or pouch."
      ] },
    { title: "Loading the sterilizer",
      steps: [
        "Switch on the main power (front, below the printer) – warm-up can take **30 minutes**.",
        "Place trays **flat** on the shelves. Nothing may touch the **electrode, back wall or inside of the door**. **Do not stack**, and never stand trays on edge to fit more.",
        "Place pouches **on edge inside an uncovered tray**, clear side facing the opaque side of the next pouch, Tyvek side up. This keeps the UV light path and sensor lens clear.",
        "Label every set/pack with **sterilizer ID, load number and expiry date**.",
        "Close the door tightly, choose the correct cycle (28 or 38 min).",
        "Write the load in the **log book**: load no., date, items, expiry date."
      ] },
    { title: "Biological indicator (BI) test",
      points: [
        "Perform at least **once per day with the first load**.",
        "Put the BI in a labelled **Tyvek pouch** on the **bottom shelf, at the back** of the chamber.",
        "At the end, remove the vial wearing **gloves and eye protection** and send to **CSSD for incubation**."
      ],
      why: "The back of the bottom shelf is the hardest place for the sterilant to reach – if it works there, it works everywhere." },
    { title: "Never process these",
      body: "Moisture or cellulose can leave items non-sterile or cancel the cycle.",
      points: [
        "Cellulose items: **cotton, paper, cardboard, linen, huck towels, gauze**.",
        "**Sponges** or anything containing wood pulp.",
        "**Single-use** items.",
        "Instruments with lumens that are **not completely dry**.",
        "Items wrapped in barrier material that contains **paper**.",
        "**Foam pads** in instrument trays."
      ] },
    { title: "When the cycle ends",
      points: [
        "A **green** screen means the cycle completed successfully. Touch **Done** – if the door unlocks, remove the load.",
        "Check the colour change on CI tape, strips and pouches. **No colour change = not sterile.**",
        "The cycle printout goes in the **Sterrad Record File**.",
        "If a cycle is **cancelled (alarm)**, get the printout showing the cause. If it cancels **on or after the injection stage**, the items must be **repacked**.",
        "Pouch expiry: **one year**. Anything used beyond its expiry is considered unsterile."
      ] }
  ],
  questions: [
    { q: "How long is the Standard cycle, and how long is the Advanced cycle?",
      o: ["28 and 38 minutes", "18 and 28 minutes", "38 and 58 minutes", "60 and 90 minutes"],
      a: 0, why: "Standard cycle = 28 minutes; Advanced cycle = 38 minutes." },
    { q: "Which wrap or pouch material may be used in the plasma sterilizer?",
      o: ["Cotton linen", "Paper wrap", "Polypropylene wrap or Tyvek pouches", "Cardboard containers"],
      a: 2, why: "Cellulose and paper materials absorb the hydrogen peroxide. Use polypropylene and Tyvek only." },
    { q: "When must the biological test be done?",
      o: ["Once a week", "Daily, with the first load", "Only when a fault occurs", "Every load"],
      a: 1, why: "Biological testing is performed at least once per day with the first load." },
    { q: "Where is the biological indicator placed in the chamber?",
      o: ["Top shelf, near the door", "Bottom shelf, at the back, in a labelled Tyvek pouch", "On the floor of the chamber", "Inside the cassette"],
      a: 1, why: "That is the most challenging area for the sterilant to reach." },
    { q: "Which item can go in the plasma sterilizer?",
      o: ["Cotton gauze", "A dry heat-sensitive instrument in a Tyvek pouch", "Single-use items", "A tray with a foam pad"],
      a: 1, why: "Gauze, cellulose, single-use items and foam pads must never be processed." },
    { q: "How must peel pouches be positioned in the tray?",
      o: ["Flat and stacked", "On edge in an uncovered tray, clear side facing opaque side, Tyvek side up", "Inside a wrapped tray", "Folded in half"],
      a: 1, why: "This allows hydrogen peroxide to diffuse and does not block the UV light path or sensor lens." },
    { q: "What may a loaded tray touch?",
      o: ["The electrode", "The back wall of the chamber", "The inside of the door", "None of these – keep clear of all three"],
      a: 3, why: "The load must not touch the electrode, the back wall or the inside of the door, and trays must not be stacked." },
    { q: "At the end of the cycle the CI tape is still red and unchanged. What does this mean?",
      o: ["The items are sterile", "The items are not sterilised", "The tape is faulty and can be ignored", "The load is fine if the screen is green"],
      a: 1, why: "No colour change indicates the packs/items have not been sterilised." },
    { q: "A cycle cancels after the injection stage. What must you do?",
      o: ["Use the items immediately", "Repack the items", "Restart without changes", "Discard the cassette only"],
      a: 1, why: "If the cycle cancels on or after the injection stage the items must be repacked. Always keep the alarm printout showing the cause." },
    { q: "What does a green background on the 'cycle completed' screen mean?",
      o: ["The cycle was cancelled", "The cycle completed successfully", "The chamber is still hot", "A biological test is due"],
      a: 1, why: "A green background indicates a successfully completed cycle." },
    { q: "What PPE is worn when removing the biological indicator vial?",
      o: ["None", "Gloves and eye protection", "Mask only", "Sterile gown only"],
      a: 1, why: "Gloves and eye protection prevent exposure to the reagents in the vial. The vial is sent to CSSD for incubation." },
    { q: "What is the expiry for items packed in pouches?",
      o: ["One week", "One month", "Six months", "One year"],
      a: 3, why: "Pouch expiry is one year. Every pack must carry the sterilizer ID, load number and expiry date." }
  ],
  practical: null
},

/* ---------------------------------------------------------- */
{
  id: "wi-026", section: "wi", code: "NWI-026", title: "Immediate Use Steam Sterilization (Flash)",
  doc: "NUR(THS)-NWI-026 – Immediate Use Steam Sterilization (Flash Sterilization) (Version 00)",
  owner: "All theatre nurses and technicians",
  summary: "When flash sterilization is allowed, and how to clean, load, transfer and document it safely.",
  minutes: 10,
  facts: [
    { k: "Cycle", v: "3–10 min · 270 °F saturated steam" },
    { k: "Use", v: "Emergency only – use immediately" },
    { k: "Never", v: "Complete sets · to cover shortages" },
    { k: "After use", v: "Online incident report" }
  ],
  lessons: [
    { title: "What it is – and when it is allowed",
      body: "**Flash sterilization** is steam sterilization of an **unwrapped** instrument or device for **3 to 10 minutes in 270 °F saturated steam**. It is for **emergencies** when no replacement is available.",
      points: [
        "Use it only if there is **not enough time** for the preferred wrapped or container method **and** the item is **needed for immediate use**.",
        "The item is used **immediately** after flash sterilization.",
        "Follow the **manufacturer's recommendations** for all items.",
        "It is **not** to be used for **complete sets or trays**, or to **make up for inventory shortages or scheduling problems**.",
        "Whenever it happens, the nurse completes an **online incident report**."
      ] },
    { title: "Clean and decontaminate first",
      points: [
        "Wear PPE: **face mask, gloves, gown and eye protection**.",
        "**Disassemble** items and clean thoroughly with **enzymatic cleaner and water**.",
        "**Flush lumens** with cleaning solution and rinse well.",
        "**Dry** all instruments thoroughly."
      ],
      why: "Cleaning removes visible and invisible soil and reduces bio-burden. Dry instruments allow steam to penetrate." },
    { title: "Prepare and load",
      points: [
        "Place instruments in the tray so they **do not overlap or touch**.",
        "Single instruments may go in a pouch – **one instrument per pouch**.",
        "Use a **chemical indicator or integrator in each load**.",
        "Concave surfaces: open side **down**.",
        "Hinged instruments: **open**, without engaging the ratchet.",
        "Place heavy items so they will not damage delicate ones.",
        "Follow the instructions pasted near the sterilizer."
      ],
      why: "Steam must touch every surface of every instrument." },
    { title: "Unloading and transfer",
      points: [
        "**In a pouch:** an unsterile person may carry the **unopened** pouch to the theatre and open it aseptically so the scrub nurse can take the item.",
        "**Not in a pouch:** the **scrub nurse** retrieves the item from the sterilizer and transports it to the sterile field.",
        "Always maintain aseptic handling and staff safety during transfer."
      ] },
    { title: "Documentation",
      body: "Keep a **log book** so flashed items can be traced when needed. Record:",
      points: [
        "Sterilization cycle and the **item sterilized**",
        "**Time and temperature** of the cycle",
        "**Name of the staff member** flashing the item",
        "**Date and time** of the cycle",
        "Result of the **chemical integrator/indicator or biological indicator**",
        "**Name of the patient** receiving the item",
        "**Reason** for flash sterilization"
      ] }
  ],
  questions: [
    { q: "Flash sterilization is steam sterilization of an unwrapped item for how long?",
      o: ["1–2 minutes", "3–10 minutes", "15–20 minutes", "30–40 minutes"],
      a: 1, why: "3 to 10 minutes in 270 °F saturated steam." },
    { q: "Which situation justifies flash sterilization?",
      o: ["The instrument set is not ready and the list is running late", "An instrument is needed immediately in an emergency and no replacement is available", "We are short of instruments for tomorrow's list", "It is quicker than wrapping"],
      a: 1, why: "It is only for immediate-use emergencies. It is not to cover inventory shortages or scheduling issues." },
    { q: "Flash sterilization must NOT be used for:",
      o: ["A single dropped instrument needed now", "Complete sets or trays of instruments", "A single instrument in a pouch", "An item needed for immediate use"],
      a: 1, why: "Complete sets and trays are never flashed." },
    { q: "What must the nurse do whenever flash sterilization is used?",
      o: ["Nothing extra", "Complete an online incident report", "Tell the supplier", "Re-sterilize the item twice"],
      a: 1, why: "If emergency (flash) sterilization occurs, nursing staff complete an online incident report." },
    { q: "How should hinged instruments be placed?",
      o: ["Closed and ratcheted", "Open, without engaging the ratchet", "Closed without ratchet", "Wrapped in gauze"],
      a: 1, why: "Open hinges let steam reach all parts of the instrument." },
    { q: "How are concave surfaces positioned?",
      o: ["Open side up", "Open side down", "On edge", "It does not matter"],
      a: 1, why: "Open side down prevents water pooling and lets steam contact the surface." },
    { q: "How many instruments may go in one pouch?",
      o: ["One", "Two", "Up to five", "A full set"],
      a: 0, why: "One instrument per pouch." },
    { q: "Who retrieves an unpouched item from the sterilizer and takes it to the sterile field?",
      o: ["A runner", "The scrub nurse", "The circulating nurse without gloves", "The porter"],
      a: 1, why: "When not in a pouch, the scrub nurse retrieves and transports it to maintain sterility." },
    { q: "Which of these must be recorded in the flash sterilization log book?",
      o: ["The surgeon's shift pattern", "Reason for flash sterilization and name of the patient receiving the item", "The brand of gloves used", "The theatre temperature"],
      a: 1, why: "The log also records the item, time/temperature, staff name, date/time and indicator result so flashed items can be traced." },
    { q: "Why are instruments dried thoroughly before flashing?",
      o: ["To prevent rust on the sterilizer door", "To ensure steam penetration", "To make them look clean", "To save time"],
      a: 1, why: "Dry instruments allow steam to penetrate." }
  ],
  practical: null
}
];
