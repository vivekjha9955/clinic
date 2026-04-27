import React, { useEffect } from "react";
import "./Servicedetail.css";

import hearingTestImg from "../../assets/hearingtest.png";
import hearingAidImg from "../../assets/hearingaid.png";
import speechTherapyImg from "../../assets/speechtherapy.png";
import hearingCareImg from "../../assets/hearingcare.png";

const SERVICE_IMAGES = {
  "Hearing Test": hearingTestImg,
  "Hearing Aid": hearingAidImg,
  "Speech Therapy": speechTherapyImg,
  "Hearing Care": hearingCareImg,

  "Pure Tone Audiometry": null,
  "Speech Audiometry": null,
  "Auditory Brainstem Response (ABR)": null,
  "Electronystagmography (ENG)": null,
  "Electrocochleography (ECoG)": null,
  "Vestibular Evoked Myogenic Potential (VEMP)": null,
  "Otoacoustic Emission (OAE)": null,
};

const SERVICE_DETAILS = {
    "Pure Tone Audiometry": {
    subtitle: "Accurate hearing threshold evaluation across different sound frequencies",
    overviewTitle: "Professional Pure Tone Audiometry for Detailed Hearing Analysis",
    description: [
      "Pure Tone Audiometry (PTA) is one of the most important and commonly performed hearing tests used to determine how well a person can hear different tones and frequencies. It helps us measure the softest sounds you can hear at low, mid, and high pitches.",
      "At Indian Speech & Hearing Clinic, we use calibrated audiometric systems to accurately identify the degree and type of hearing loss. This test plays a key role in diagnosis, treatment planning, hearing aid selection, and ongoing hearing monitoring."
    ],
    badges: [
      "Accurate hearing thresholds",
      "Detailed audiogram report",
      "Adult & child-friendly",
      "Supports treatment planning",
    ],
    highlights: [
      {
        icon: "fas fa-wave-square",
        title: "Precise Threshold Testing",
        desc: "Measures hearing sensitivity across different frequencies and sound intensities.",
      },
      {
        icon: "fas fa-file-waveform",
        title: "Audiogram Mapping",
        desc: "Results are recorded on an audiogram to clearly visualise your hearing levels.",
      },
      {
        icon: "fas fa-stethoscope",
        title: "Type Identification",
        desc: "Helps detect conductive, sensorineural, or mixed hearing loss patterns.",
      },
      {
        icon: "fas fa-ear-listen",
        title: "Clinical Decision Support",
        desc: "Useful for hearing aid fitting, medical referral, and rehabilitation planning.",
      },
    ],
    steps: [
      {
        num: "01",
        title: "Case History Review",
        desc: "We understand symptoms, hearing concerns, and previous hearing history."
      },
      {
        num: "02",
        title: "Ear Check / Otoscopy",
        desc: "A quick visual inspection ensures the ear canal is clear before testing."
      },
      {
        num: "03",
        title: "Air Conduction Testing",
        desc: "You respond to tones presented through headphones at different frequencies."
      },
      {
        num: "04",
        title: "Bone Conduction Testing",
        desc: "If required, bone conduction helps determine the exact type of hearing loss."
      },
      {
        num: "05",
        title: "Results & Guidance",
        desc: "Your audiologist explains the audiogram and suggests the next best step."
      },
    ],
    whoFor: [
      "Adults with suspected hearing loss",
      "Children needing baseline hearing evaluation",
      "Patients with tinnitus or ear fullness",
      "People planning hearing aid consultation",
      "Individuals exposed to loud noise",
      "Anyone needing a detailed hearing assessment",
    ],
    ctaTitle: "Need a Detailed Hearing Evaluation?",
    ctaText:
      "Book a professional Pure Tone Audiometry assessment to understand your hearing levels clearly and get expert guidance for the right next step.",
  },

  "Speech Audiometry": {
    subtitle: "Assessing how clearly you hear and understand spoken words",
    overviewTitle: "Speech Audiometry for Real-World Communication Assessment",
    description: [
      "Speech Audiometry evaluates your ability to detect, hear, and understand speech rather than just pure tones. It gives valuable information about how clearly you can recognise words in everyday communication situations.",
      "This test is often performed along with Pure Tone Audiometry to provide a more complete understanding of hearing function. It is especially useful when patients say they can hear sounds but still struggle to understand speech clearly."
    ],
    badges: [
      "Speech understanding test",
      "Word recognition analysis",
      "Supports hearing aid fitting",
      "Functional communication insight",
    ],
    highlights: [
      {
        icon: "fas fa-volume-up",
        title: "Speech Detection",
        desc: "Measures the softest level at which speech can be heard and recognised.",
      },
      {
        icon: "fas fa-comments",
        title: "Word Recognition",
        desc: "Evaluates how accurately spoken words are understood at comfortable listening levels.",
      },
      {
        icon: "fas fa-headphones",
        title: "Hearing Aid Support",
        desc: "Helps guide hearing aid programming and fine-tuning for better speech clarity.",
      },
      {
        icon: "fas fa-user-doctor",
        title: "Better Communication Planning",
        desc: "Useful for counselling, therapy planning, and real-world listening support.",
      },
    ],
    steps: [
      {
        num: "01",
        title: "Initial Hearing Review",
        desc: "We review hearing concerns and previous test findings if available."
      },
      {
        num: "02",
        title: "Speech Reception Testing",
        desc: "We identify the lowest level at which speech can be detected."
      },
      {
        num: "03",
        title: "Word Recognition Testing",
        desc: "Words are presented and your clarity/understanding is measured."
      },
      {
        num: "04",
        title: "Comparison With PTA",
        desc: "Results are compared with pure tone findings for better clinical interpretation."
      },
      {
        num: "05",
        title: "Counselling & Recommendations",
        desc: "We explain your speech hearing ability and suggest the right intervention."
      },
    ],
    whoFor: [
      "People who hear but do not understand speech clearly",
      "Patients with difficulty in noisy environments",
      "Hearing aid candidates",
      "Users needing speech clarity evaluation",
      "Adults and children needing functional hearing assessment",
      "People with communication complaints despite normal basic hearing",
    ],
    ctaTitle: "Struggling to Understand Speech Clearly?",
    ctaText:
      "Speech Audiometry helps us understand real-life listening challenges and guide the right hearing or therapy solution for clearer communication.",
  },

  "Auditory Brainstem Response (ABR)": {
    subtitle: "Objective neural hearing assessment for infants, children, and difficult-to-test patients",
    overviewTitle: "Advanced ABR Testing for Hearing Nerve and Brainstem Response",
    description: [
      "Auditory Brainstem Response (ABR) is a specialised objective hearing test that measures how the auditory nerve and brainstem respond to sound. It does not require the patient to actively respond, making it ideal for infants, young children, and individuals who cannot reliably participate in standard hearing tests.",
      "At our clinic, ABR is used to estimate hearing thresholds, assess neural pathway integrity, and support early detection of hearing loss or auditory processing issues in clinically important cases."
    ],
    badges: [
      "Objective hearing test",
      "Infant & pediatric friendly",
      "No active response required",
      "Neural pathway evaluation",
    ],
    highlights: [
      {
        icon: "fas fa-baby",
        title: "Ideal for Infants",
        desc: "Perfect for newborns, babies, and young children who cannot respond behaviorally.",
      },
      {
        icon: "fas fa-brain",
        title: "Neural Pathway Assessment",
        desc: "Measures auditory nerve and brainstem response to sound stimulation.",
      },
      {
        icon: "fas fa-microscope",
        title: "Objective Results",
        desc: "Provides accurate, measurable hearing information without relying on patient feedback.",
      },
      {
        icon: "fas fa-ear-listen",
        title: "Early Detection Support",
        desc: "Useful for early hearing diagnosis and timely intervention planning.",
      },
    ],
    steps: [
      {
        num: "01",
        title: "Preparation",
        desc: "The patient is prepared comfortably, and the test is explained to the family."
      },
      {
        num: "02",
        title: "Electrode Placement",
        desc: "Small electrodes are placed on the scalp and around the ears."
      },
      {
        num: "03",
        title: "Sound Delivery",
        desc: "Clicks or tone bursts are delivered through earphones."
      },
      {
        num: "04",
        title: "Response Recording",
        desc: "The system records the electrical responses of the hearing pathway."
      },
      {
        num: "05",
        title: "Interpretation & Guidance",
        desc: "Results are analysed and explained with recommendations for next steps."
      },
    ],
    whoFor: [
      "Newborns and infants",
      "Young children with suspected hearing loss",
      "Difficult-to-test patients",
      "Patients needing objective hearing threshold estimation",
      "Cases with delayed speech due to possible hearing concerns",
      "Neurological auditory pathway assessment cases",
    ],
    ctaTitle: "Need an Objective Hearing Test for a Child or Infant?",
    ctaText:
      "ABR testing provides accurate hearing pathway information and supports early diagnosis for timely treatment and better developmental outcomes.",
  },

  "Electronystagmography (ENG)": {
    subtitle: "A vestibular balance test that helps diagnose dizziness, vertigo, and inner ear disorders",
    overviewTitle: "ENG Testing for Vertigo, Dizziness, and Balance System Evaluation",
    description: [
      "Electronystagmography (ENG) is a specialised vestibular test used to evaluate the balance system by recording involuntary eye movements called nystagmus. Because the balance organs of the inner ear are closely connected to eye movement control, ENG helps identify whether dizziness or vertigo is linked to vestibular dysfunction.",
      "This test is especially useful for patients experiencing spinning sensations, imbalance, motion sensitivity, or unexplained dizziness. It supports accurate diagnosis and helps guide further treatment or vestibular rehabilitation."
    ],
    badges: [
      "Vertigo evaluation",
      "Balance system testing",
      "Eye movement recording",
      "Vestibular disorder support",
    ],
    highlights: [
      {
        icon: "fas fa-dizzy",
        title: "Dizziness Investigation",
        desc: "Helps identify whether dizziness is related to inner ear balance problems.",
      },
      {
        icon: "fas fa-eye",
        title: "Eye Movement Analysis",
        desc: "Records involuntary eye responses linked to vestibular system function.",
      },
      {
        icon: "fas fa-balance-scale",
        title: "Balance Function Assessment",
        desc: "Evaluates how well the vestibular system is functioning on both sides.",
      },
      {
        icon: "fas fa-clipboard-check",
        title: "Clinical Direction",
        desc: "Supports diagnosis, treatment planning, and vestibular rehabilitation decisions.",
      },
    ],
    steps: [
      {
        num: "01",
        title: "Symptom Review",
        desc: "We review dizziness, vertigo, imbalance, and related medical history."
      },
      {
        num: "02",
        title: "Electrode Placement",
        desc: "Electrodes are placed around the eyes to track movement."
      },
      {
        num: "03",
        title: "Tracking & Positional Tests",
        desc: "Eye movements are recorded during visual and head-position tasks."
      },
      {
        num: "04",
        title: "Vestibular Response Analysis",
        desc: "The recorded patterns help assess vestibular weakness or dysfunction."
      },
      {
        num: "05",
        title: "Explanation & Guidance",
        desc: "Results are explained with recommendations for management or further evaluation."
      },
    ],
    whoFor: [
      "Patients with vertigo",
      "People experiencing dizziness or imbalance",
      "Suspected vestibular disorder cases",
      "Inner ear balance assessment needs",
      "People with motion sensitivity",
      "Patients referred for vestibular evaluation",
    ],
    ctaTitle: "Experiencing Vertigo or Dizziness?",
    ctaText:
      "ENG testing helps identify balance-related inner ear issues and supports the right diagnosis, treatment plan, and rehabilitation pathway.",
  },

  "Electrocochleography (ECoG)": {
    subtitle: "Advanced cochlear and auditory nerve response testing for inner ear disorders",
    overviewTitle: "Electrocochleography for Advanced Inner Ear and Auditory Assessment",
    description: [
      "Electrocochleography (ECoG) is an advanced objective test that measures electrical potentials generated by the cochlea and auditory nerve in response to sound stimulation. It is often used in specialised cases where inner ear pressure abnormalities or Ménière’s disease are suspected.",
      "This test provides valuable clinical information in patients who have fluctuating hearing loss, tinnitus, vertigo, ear fullness, or complex auditory symptoms that require deeper diagnostic evaluation."
    ],
    badges: [
      "Advanced cochlear testing",
      "Objective auditory response",
      "Ménière’s support evaluation",
      "Inner ear assessment",
    ],
    highlights: [
      {
        icon: "fas fa-assistive-listening-systems",
        title: "Cochlear Function Check",
        desc: "Evaluates electrical activity generated by the inner ear in response to sound.",
      },
      {
        icon: "fas fa-water",
        title: "Ménière’s Support",
        desc: "Useful when fluctuating hearing, tinnitus, vertigo, or ear pressure symptoms are present.",
      },
      {
        icon: "fas fa-bolt",
        title: "Objective Data",
        desc: "Provides measurable electrophysiological information for advanced diagnosis.",
      },
      {
        icon: "fas fa-user-doctor",
        title: "Specialised Clinical Use",
        desc: "Helps specialists make more informed decisions in complex auditory and vestibular cases.",
      },
    ],
    steps: [
      {
        num: "01",
        title: "Clinical Review",
        desc: "Symptoms and previous hearing or vestibular findings are reviewed."
      },
      {
        num: "02",
        title: "Electrode Setup",
        desc: "A specialised electrode setup is used to record cochlear responses."
      },
      {
        num: "03",
        title: "Sound Stimulation",
        desc: "Clicks or controlled sounds are presented through earphones."
      },
      {
        num: "04",
        title: "Response Recording",
        desc: "Electrical activity from the cochlea and auditory nerve is recorded."
      },
      {
        num: "05",
        title: "Interpretation",
        desc: "The specialist analyses results to support advanced auditory diagnosis."
      },
    ],
    whoFor: [
      "Patients with suspected Ménière’s disease",
      "People with fluctuating hearing loss",
      "Tinnitus with vertigo complaints",
      "Cases of ear fullness with hearing symptoms",
      "Advanced auditory diagnostic referrals",
      "Patients needing specialised inner ear testing",
    ],
    ctaTitle: "Need Advanced Inner Ear Testing?",
    ctaText:
      "Electrocochleography provides deeper insight into cochlear and auditory nerve function, helping guide specialised diagnosis and better treatment decisions.",
  },

  "Vestibular Evoked Myogenic Potential (VEMP)": {
    subtitle: "Advanced vestibular pathway testing for balance-related disorders and dizziness",
    overviewTitle: "VEMP Testing for Inner Ear Balance Organ and Nerve Pathway Assessment",
    description: [
      "Vestibular Evoked Myogenic Potential (VEMP) is an advanced diagnostic test used to assess specific balance organs of the inner ear and their related nerve pathways by recording sound-triggered muscle responses.",
      "It is commonly recommended for patients with dizziness, vertigo, imbalance, or suspected vestibular dysfunction. VEMP helps clinicians understand whether the balance system is functioning symmetrically and appropriately."
    ],
    badges: [
      "Advanced vestibular test",
      "Objective balance pathway check",
      "Dizziness & vertigo support",
      "Muscle response recording",
    ],
    highlights: [
      {
        icon: "fas fa-wave-square",
        title: "Objective Vestibular Assessment",
        desc: "Measures reflexive muscle responses triggered by sound stimulation.",
      },
      {
        icon: "fas fa-balance-scale",
        title: "Balance Organ Evaluation",
        desc: "Assesses specific vestibular organs and their related nerve pathways.",
      },
      {
        icon: "fas fa-dizzy",
        title: "Vertigo & Imbalance Support",
        desc: "Useful in patients with dizziness, imbalance, and complex vestibular complaints.",
      },
      {
        icon: "fas fa-chart-line",
        title: "Advanced Diagnostic Insight",
        desc: "Provides additional information in comprehensive vestibular workups.",
      },
    ],
    steps: [
      {
        num: "01",
        title: "History & Symptoms Review",
        desc: "We assess dizziness, imbalance, vertigo, and related complaints."
      },
      {
        num: "02",
        title: "Electrode Placement",
        desc: "Electrodes are placed on the neck or around the eyes depending on test type."
      },
      {
        num: "03",
        title: "Sound Presentation",
        desc: "Controlled sound stimuli are delivered through earphones."
      },
      {
        num: "04",
        title: "Muscle Response Recording",
        desc: "Reflexive muscle responses are captured and analysed."
      },
      {
        num: "05",
        title: "Clinical Explanation",
        desc: "Results are explained and integrated into your balance evaluation plan."
      },
    ],
    whoFor: [
      "Patients with vertigo or dizziness",
      "People with unexplained imbalance",
      "Suspected vestibular disorder cases",
      "Patients needing advanced balance testing",
      "Inner ear pathway assessment referrals",
      "People undergoing comprehensive vestibular evaluation",
    ],
    ctaTitle: "Need Advanced Balance System Testing?",
    ctaText:
      "VEMP testing helps evaluate specific balance pathways and provides deeper insight into dizziness, vertigo, and vestibular disorders.",
  },

  "Otoacoustic Emission (OAE)": {
    subtitle: "Quick, painless, and objective cochlear screening for newborns, children, and adults",
    overviewTitle: "OAE Testing for Fast and Reliable Inner Ear Function Screening",
    description: [
      "Otoacoustic Emission (OAE) is a quick and non-invasive hearing screening test that measures tiny sounds produced by the inner ear (cochlea), specifically the outer hair cells. It is widely used in newborn hearing screening and pediatric hearing evaluations.",
      "Because the test does not require active participation, it is ideal for infants, young children, and anyone who needs an objective cochlear function check. It is fast, comfortable, and highly valuable for early detection."
    ],
    badges: [
      "Quick objective screening",
      "Newborn-friendly",
      "Painless & non-invasive",
      "Cochlear outer hair cell check",
    ],
    highlights: [
      {
        icon: "fas fa-baby",
        title: "Excellent for Newborns",
        desc: "Commonly used in newborn and infant hearing screening programs.",
      },
      {
        icon: "fas fa-clock",
        title: "Fast & Comfortable",
        desc: "The test is quick, painless, and usually completed in a short time.",
      },
      {
        icon: "fas fa-ear-listen",
        title: "Cochlear Function Screening",
        desc: "Checks outer hair cell function in the inner ear objectively.",
      },
      {
        icon: "fas fa-microscope",
        title: "Early Detection Support",
        desc: "Helps detect hearing concerns early so timely intervention can begin.",
      },
    ],
    steps: [
      {
        num: "01",
        title: "Preparation",
        desc: "A small soft probe is prepared for placement in the ear canal."
      },
      {
        num: "02",
        title: "Probe Placement",
        desc: "The probe is gently placed in the ear canal comfortably."
      },
      {
        num: "03",
        title: "Sound Delivery",
        desc: "Soft clicks or tones are played through the probe."
      },
      {
        num: "04",
        title: "Response Capture",
        desc: "The device records tiny sound emissions produced by the cochlea."
      },
      {
        num: "05",
        title: "Result Review",
        desc: "Results are explained and further recommendations are given if needed."
      },
    ],
    whoFor: [
      "Newborn hearing screening",
      "Infants and young children",
      "Children with speech delay and suspected hearing concerns",
      "Patients needing objective cochlear screening",
      "Quick screening before advanced testing",
      "Anyone needing a fast, painless hearing check",
    ],
    ctaTitle: "Need a Quick and Objective Hearing Screening?",
    ctaText:
      "OAE testing is fast, painless, and ideal for early detection of hearing concerns—especially in newborns, infants, and young children.",
  },
  "Hearing Test": {
    subtitle: "Accurate & comprehensive audiometric evaluation",
    overviewTitle: "Professional Hearing Assessment for All Age Groups",
    description: [
      "A hearing test is the first and most important step in identifying hearing difficulties and planning the right treatment. At Indian Speech & Hearing Clinic, we perform detailed audiometric evaluations using advanced, calibrated diagnostic equipment in a comfortable clinical environment.",
      "Our qualified audiologists assess your hearing sensitivity across a full range of frequencies and explain the results in simple language. Whether you are noticing difficulty hearing conversations, struggling in noisy environments, or seeking a routine check-up, we provide a precise diagnosis and clear next steps.",
    ],
    badges: [
      "Non-invasive & painless",
      "Advanced audiometric equipment",
      "Certified audiologists",
      "Detailed audiogram report",
    ],
    highlights: [
      {
        icon: "fas fa-wave-square",
        title: "Accurate Diagnosis",
        desc: "We identify the degree and type of hearing loss with clinical precision.",
      },
      {
        icon: "fas fa-file-waveform",
        title: "Audiogram Report",
        desc: "You receive a clear hearing report that helps guide treatment decisions.",
      },
      {
        icon: "fas fa-user-doctor",
        title: "Expert Counselling",
        desc: "Our audiologists explain your results and recommend the best next step.",
      },
      {
        icon: "fas fa-clock",
        title: "Quick Process",
        desc: "Most standard hearing assessments are completed efficiently and comfortably.",
      },
    ],
    steps: [
      {
        num: "01",
        title: "Case History",
        desc: "We begin by understanding your hearing concerns, medical history, and daily listening challenges.",
      },
      {
        num: "02",
        title: "Otoscopy",
        desc: "A visual inspection of the ear canal and eardrum helps rule out wax blockage or infection.",
      },
      {
        num: "03",
        title: "Pure Tone Audiometry",
        desc: "You listen to tones at different frequencies and volumes to determine your hearing thresholds.",
      },
      {
        num: "04",
        title: "Speech Testing",
        desc: "We assess how clearly you hear and understand speech at different listening levels.",
      },
      {
        num: "05",
        title: "Results & Guidance",
        desc: "Your audiologist explains the audiogram and discusses suitable treatment or hearing aid options.",
      },
    ],
    whoFor: [
      "Adults experiencing difficulty hearing speech clearly",
      "Senior citizens with age-related hearing changes",
      "Children needing baseline or follow-up hearing checks",
      "Patients with tinnitus, ear fullness, or imbalance concerns",
      "People exposed to noise at work or in daily life",
      "Anyone planning to purchase or upgrade a hearing aid",
    ],
    ctaTitle: "Concerned About Your Hearing?",
    ctaText:
      "Book a professional hearing evaluation and get expert guidance from our experienced audiologists. Early diagnosis leads to better outcomes and better hearing confidence.",
  },

  "Hearing Aid": {
    subtitle: "Custom-fitted hearing aids from leading global brands",
    overviewTitle: "Advanced Hearing Aid Solutions Tailored to Your Lifestyle",
    description: [
      "We provide a complete hearing aid solution — from consultation and brand selection to fitting, programming, trial, and after-sales care. At Indian Speech & Hearing Clinic, we work with leading global brands to ensure every patient receives the most suitable device for their hearing profile, comfort needs, and budget.",
      "Our hearing aids are professionally programmed according to your audiogram, ensuring clear sound, improved speech understanding, and long-term comfort. We also offer device orientation, maintenance guidance, fine-tuning, and regular follow-up visits so you continue to get the best performance from your hearing aid.",
    ],
    badges: [
      "Top global brands",
      "Custom programming",
      "Trial period available",
      "Long-term support",
    ],
    highlights: [
      {
        icon: "fas fa-ear-listen",
        title: "Personalised Selection",
        desc: "We recommend the right style and technology based on your hearing and lifestyle.",
      },
      {
        icon: "fas fa-sliders",
        title: "Precise Programming",
        desc: "Every device is fine-tuned according to your audiogram for optimal clarity.",
      },
      {
        icon: "fas fa-mobile-screen-button",
        title: "Modern Features",
        desc: "Many models include Bluetooth, rechargeability, noise reduction, and app control.",
      },
      {
        icon: "fas fa-screwdriver-wrench",
        title: "After-Sales Care",
        desc: "We provide cleaning, adjustments, maintenance, and regular performance checks.",
      },
    ],
    steps: [
      {
        num: "01",
        title: "Hearing Evaluation",
        desc: "A detailed hearing assessment helps us understand your exact hearing profile.",
      },
      {
        num: "02",
        title: "Device Recommendation",
        desc: "We suggest the most suitable hearing aid style, technology level, and brand.",
      },
      {
        num: "03",
        title: "Trial & Demo",
        desc: "You can experience the hearing aid in real-life situations before finalising your choice.",
      },
      {
        num: "04",
        title: "Custom Fitting",
        desc: "The hearing aid is professionally fitted and programmed for your comfort and hearing needs.",
      },
      {
        num: "05",
        title: "Follow-up Fine Tuning",
        desc: "We schedule follow-ups to refine sound quality and ensure maximum satisfaction.",
      },
    ],
    whoFor: [
      "People with mild to profound hearing loss",
      "Patients who struggle in conversations or noisy places",
      "Seniors needing comfortable daily hearing support",
      "Professionals who need better speech clarity in meetings",
      "Users upgrading from older hearing aid technology",
      "First-time hearing aid users needing expert guidance",
    ],
    ctaTitle: "Looking for the Right Hearing Aid?",
    ctaText:
      "Visit our clinic for a personalised hearing aid consultation, live demo, and professional fitting. We help you choose the best device for clear, confident hearing every day.",
  },

  "Speech Therapy": {
    subtitle: "Personalised speech & language therapy for children and adults",
    overviewTitle: "Supportive Therapy for Clearer Speech and Better Communication",
    description: [
      "Our speech therapy services are designed to help children and adults overcome communication challenges and improve speech clarity, language skills, fluency, and confidence. Therapy is provided by trained professionals in a supportive and structured environment.",
      "We work with a wide range of concerns including delayed speech development, articulation difficulties, stammering, voice issues, language delays, and communication challenges related to hearing loss. Each therapy plan is personalised, goal-oriented, and built around measurable progress.",
    ],
    badges: [
      "All age groups",
      "Certified therapists",
      "Evidence-based methods",
      "Family guidance included",
    ],
    highlights: [
      {
        icon: "fas fa-child-reaching",
        title: "Child Development Support",
        desc: "Early therapy helps children build strong speech and language foundations.",
      },
      {
        icon: "fas fa-comments",
        title: "Communication Confidence",
        desc: "Therapy improves everyday speaking, listening, and social interaction skills.",
      },
      {
        icon: "fas fa-house",
        title: "Family Involvement",
        desc: "Parents and caregivers receive guidance to support progress at home.",
      },
      {
        icon: "fas fa-chart-line",
        title: "Progress Tracking",
        desc: "We regularly review goals and adjust therapy strategies for better outcomes.",
      },
    ],
    steps: [
      {
        num: "01",
        title: "Initial Assessment",
        desc: "We evaluate speech, language, voice, fluency, and communication skills in detail.",
      },
      {
        num: "02",
        title: "Goal Planning",
        desc: "Therapy goals are defined based on the patient’s needs, age, and communication challenges.",
      },
      {
        num: "03",
        title: "Therapy Sessions",
        desc: "Structured sessions use personalised techniques and evidence-based exercises.",
      },
      {
        num: "04",
        title: "Home Practice Plan",
        desc: "Families receive exercises and strategies to continue practice outside the clinic.",
      },
      {
        num: "05",
        title: "Progress Review",
        desc: "We track improvements regularly and refine therapy goals as progress develops.",
      },
    ],
    whoFor: [
      "Children with delayed speech or unclear pronunciation",
      "Children with language comprehension or expression difficulties",
      "People with stammering or fluency concerns",
      "Individuals with voice disorders or vocal strain",
      "Patients with communication issues related to hearing loss",
      "Adults recovering communication skills after medical conditions",
    ],
    ctaTitle: "Need Speech or Language Support?",
    ctaText:
      "Our personalised speech therapy programs help patients communicate more clearly and confidently. Book an assessment and start a structured path toward better speech and language skills.",
  },

  "Hearing Care": {
    subtitle: "Complete long-term hearing wellness and rehabilitation support",
    overviewTitle: "Holistic Hearing Care Beyond Diagnosis and Devices",
    description: [
      "Hearing care is not only about diagnosis or hearing aids — it is about long-term hearing wellness. At Indian Speech & Hearing Clinic, we provide complete hearing care support including counselling, hearing protection guidance, tinnitus support, hearing aid maintenance, and follow-up rehabilitation.",
      "Our goal is to help every patient enjoy better hearing in daily life through personalised care, regular monitoring, device optimisation, and practical strategies for communication. Whether you already use hearing aids or are just beginning your hearing journey, we remain your long-term care partner.",
    ],
    badges: [
      "Holistic hearing support",
      "Tinnitus guidance",
      "Device maintenance",
      "Ongoing monitoring",
    ],
    highlights: [
      {
        icon: "fas fa-shield-heart",
        title: "Preventive Care",
        desc: "We help you protect and preserve your hearing with practical lifestyle advice.",
      },
      {
        icon: "fas fa-volume-high",
        title: "Tinnitus Guidance",
        desc: "Supportive counselling and hearing strategies for ringing or buzzing concerns.",
      },
      {
        icon: "fas fa-toolbox",
        title: "Device Maintenance",
        desc: "Regular cleaning, checks, and adjustments keep your hearing aids performing well.",
      },
      {
        icon: "fas fa-people-group",
        title: "Rehabilitation Support",
        desc: "We help you adapt to better hearing through counselling and listening strategies.",
      },
    ],
    steps: [
      {
        num: "01",
        title: "Consultation",
        desc: "We understand your hearing history, device usage, and current hearing challenges.",
      },
      {
        num: "02",
        title: "Assessment",
        desc: "A full review of your hearing status and device performance is conducted.",
      },
      {
        num: "03",
        title: "Personalised Care Plan",
        desc: "We design a hearing care plan covering support, maintenance, and communication advice.",
      },
      {
        num: "04",
        title: "Ongoing Device Support",
        desc: "Your hearing aid settings, comfort, and performance are checked and optimised regularly.",
      },
      {
        num: "05",
        title: "Long-Term Follow-Up",
        desc: "Regular visits help track progress and keep your hearing support aligned with your needs.",
      },
    ],
    whoFor: [
      "Existing hearing aid users needing regular support",
      "Patients with tinnitus or listening fatigue",
      "Individuals adjusting to newly fitted hearing aids",
      "Seniors who need long-term hearing wellness monitoring",
      "People exposed to noisy work or environments",
      "Anyone who wants proactive hearing protection and care",
    ],
    ctaTitle: "Need Ongoing Hearing Support?",
    ctaText:
      "From counselling to device care and hearing rehabilitation, our clinic provides complete long-term hearing care to help you stay confident, comfortable, and connected.",
  },
};

const ServiceDetail = ({ service, onClose }) => {
  const detail = SERVICE_DETAILS[service.title];
  const image = SERVICE_IMAGES[service.title];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.history.pushState({ serviceDetail: true }, "");

    const handlePopState = () => {
      onClose();
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("popstate", handlePopState);
    };
  }, [onClose]);

  const handleClose = () => {
    if (window.history.state && window.history.state.serviceDetail) {
      window.history.back();
    } else {
      onClose();
    }
  };

  if (!detail) return null;

  return (
    <div className="service-detail-page">
      {/* Header */}
      <div className="svc-header">
        <div className="svc-header__inner">
          <button className="svc-back" onClick={handleClose}>
            <i className="fas fa-arrow-left"></i> Back
          </button>

          <div className="svc-header__content">
            <div className="svc-header__icon">
              <i className={service.icon}></i>
            </div>
            <div>
              <h1 className="svc-header__title">{service.title}</h1>
              <p className="svc-header__sub">{detail.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="svc-body">
        <div className="container">
          {/* Overview */}
          <section className="svc-overview">
            <div className="svc-overview__text">
              <span className="svc-overview__tag">Service Overview</span>
              <h2 className="svc-overview__title">{detail.overviewTitle}</h2>

              {detail.description.map((para, index) => (
                <p key={index}>{para}</p>
              ))}

              <div className="svc-overview__badges">
                {detail.badges.map((badge, index) => (
                  <span key={index} className="svc-overview__badge">
                    <i className="fas fa-circle-check"></i> {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="svc-overview__img">
              {image ? (
                <img
                  src={image}
                  alt={service.title}
                  className="svc-overview__real-img"
                />
              ) : (
                <i className={service.icon}></i>
              )}
            </div>
          </section>

          {/* Highlights */}
          <section className="svc-highlights">
            <div className="section-tag">Why Choose This Service</div>
            <h2 className="section-title">Key Benefits & Highlights</h2>
            <p className="section-subtitle">
              Designed to provide accurate diagnosis, personalised care, and
              better long-term outcomes for your hearing and communication
              health.
            </p>

            <div className="svc-highlights__grid">
              {detail.highlights.map((item, index) => (
                <div className="svc-highlight-card" key={index}>
                  <div className="svc-highlight-card__icon">
                    <i className={item.icon}></i>
                  </div>
                  <h3 className="svc-highlight-card__title">{item.title}</h3>
                  <p className="svc-highlight-card__desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Steps */}
          <section className="svc-steps">
            <div className="section-tag">What To Expect</div>
            <h2 className="section-title">Our Step-by-Step Process</h2>
            <p className="section-subtitle">
              Every service follows a professional, patient-friendly process so
              you feel informed, comfortable, and supported at every stage.
            </p>

            <div className="svc-steps__grid">
              {detail.steps.map((step, index) => (
                <div className="svc-step-card" key={index}>
                  <div className="svc-step-card__num">{step.num}</div>
                  <h3 className="svc-step-card__title">{step.title}</h3>
                  <p className="svc-step-card__desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Who is it for */}
          <section className="svc-who">
            <h2 className="svc-who__title">Who Is This Service For?</h2>
            <ul className="svc-who__list">
              {detail.whoFor.map((item, index) => (
                <li key={index}>
                  <i className="fas fa-circle-check"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <section className="svc-cta">
            <div className="svc-cta__text">
              <h3>{detail.ctaTitle}</h3>
              <p>{detail.ctaText}</p>
            </div>

            <a href="#contact" className="svc-cta__btn" onClick={handleClose}>
              Book Appointment <i className="fas fa-arrow-right"></i>
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;