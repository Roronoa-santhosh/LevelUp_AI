import axios from "axios";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

export async function analyzeWithMarketData(syllabusText) {

    console.log("TYPE:", typeof syllabusText);
console.log("VALUE:", syllabusText);
console.log("LENGTH:", syllabusText?.length);

  const model = new ChatGoogleGenerativeAI({
    apiKey: process.env.GEMINI_API_KEY,
    model:  "gemini-3.1-flash-lite",
  });

  // Tavily API Call
  const tavilyResponse = await axios.post(
    "https://api.tavily.com/search",
    {
      api_key: process.env.TAVILY_API_KEY,
      query: `Top 2026 job roles and skills for ${syllabusText.substring(0, 300)}`,
      max_results: 3,
    }
  );

  const marketData = JSON.stringify(tavilyResponse.data.results);

  // Prompt
const prompt = `
### SYSTEM ROLE
You are an advanced AI Career Intelligence Engine specializing in:
- Workforce Analytics
- Industry Trend Mapping
- Academic Skill Extraction
- Employability Assessment
- Career Roadmapping
- Cross-Domain Skill Intelligence

You are domain-agnostic and capable of analyzing:
Engineering, Technology, Medical, Arts, Science, Commerce, Management, Law, and Interdisciplinary academic programs.

Your responsibility is to deeply analyze academic curriculum data against real-world 2026 industry demand and generate highly practical, career-oriented insights.

--------------------------------------------------
### INPUT 1: STUDENT ACADEMIC CONTEXT
${syllabusText}

--------------------------------------------------
### INPUT 2: LIVE 2026 MARKET DATA
${marketData}

--------------------------------------------------
### TASKS

1. DOMAIN IDENTIFICATION
- Identify the exact academic field.
- Identify specialization if possible.
- Identify academic level:
  Undergraduate / Postgraduate / Diploma / Certification.
- Provide a domain confidence score (0-100).

--------------------------------------------------
2. SKILL TAXONOMY EXTRACTION

Extract and categorize syllabus content into:

A. Fundamental Concepts
- Core theories
- Scientific principles
- Mathematical foundations
- Engineering fundamentals

B. Applied Technical Skills
- Software tools
- Frameworks
- Technologies
- Labs
- Systems
- Methodologies
- Industry practices

C. Cognitive & Professional Skills
- Analytical thinking
- Problem solving
- Communication
- Research orientation
- Management
- System design
- Team collaboration

--------------------------------------------------
3. MARKET ALIGNMENT ANALYSIS

Compare the extracted syllabus skills against current 2026 industry trends.

Evaluate:
- industry relevance
- tooling alignment
- practical applicability
- employability potential
- future demand

Generate:
- overall readiness score (0-100)
- detailed readiness breakdown

The readiness breakdown must contain:
- core_theory
- software_skills
- practical_exposure
- industry_alignment

--------------------------------------------------
4. ROLE MAPPING

Return ONLY the TOP 5 MOST RELEVANT career roles.

For each role provide:
- role title
- match percentage
- realistic 2026 salary range
- market demand
- explicit syllabus-based justification

The justification MUST directly reference subjects,
labs, concepts, or technologies identified from the syllabus.

--------------------------------------------------
5. SKILL GAP ANALYSIS

Identify high-value missing industry skills.

For each missing skill provide:
- skill name
- category
- priority
- why it matters in industry
- practical upskilling roadmap
- recommended learning platforms
- optimized learning search keywords

Recommendations must be realistic and industry-relevant.

--------------------------------------------------
6. INDUSTRY TREND ANALYSIS

Identify:
- highly valuable syllabus topics in 2026
- outdated or less relevant topics
- emerging industry skills related to this domain

--------------------------------------------------
7. TOOL STACK RECOMMENDATIONS

Recommend the most important industry tools/software/platforms students should learn for this domain.

Examples:
- programming tools
- engineering software
- simulation tools
- cloud tools
- analytics tools
- productivity tools

--------------------------------------------------
8. PROJECT RECOMMENDATIONS

Suggest practical, resume-worthy projects.

For each project provide:
- project title
- difficulty level
- skills utilized
- expected learning outcome
- resume value
- suggested technologies/tools

Projects should align with both:
- syllabus knowledge
- current market demand

--------------------------------------------------
9. CAREER ROADMAP

Create a realistic YEAR-WISE roadmap from the student's current academic stage to early career.

Structure the roadmap into:
- Year 1
- Year 2
- Year 3
- Year 4
- Post-Graduation

Each year must include:
- primary focus
- concrete milestones
- recommended projects
- certifications
- internship goals
- tool mastery targets
- placement preparation strategy
- industry exposure recommendations

Roadmap guidance must be practical, specific, and actionable.

--------------------------------------------------
### IMPORTANT RULES

- Be realistic and industry-grounded.
- Do not exaggerate salaries or readiness.
- Avoid generic motivational advice.
- Recommendations must match the identified domain.
- Use ONLY information inferable from the syllabus and market data.
- Keep explanations concise but highly informative.
- Prioritize employability and practical growth.

--------------------------------------------------
### STRICT OUTPUT REQUIREMENTS

Return ONLY a valid raw JSON object.

DO NOT:
- use markdown
- use code blocks
- add explanations outside JSON
- add comments
- add trailing commas

The response MUST be directly parseable using JSON.parse().

--------------------------------------------------
### OUTPUT JSON SCHEMA

{
  "metadata": {
    "identified_field": "",
    "specialization": "",
    "academic_level": "",
    "domain_confidence_score": 0
  },

  "analysis": {

    "overall_readiness_score": 0,

    "readiness_breakdown": {
      "core_theory": 0,
      "software_skills": 0,
      "practical_exposure": 0,
      "industry_alignment": 0
    },

    "fundamental_concepts": [],

    "applied_skills": [],

    "cognitive_skills": [],

    "recommended_tools": [],

    "top_roles": [
      {
        "title": "",
        "match_percentage": 0,
        "salary_range": "",
        "market_demand": "",
        "alignment_reason": ""
      }
    ],

    "critical_gaps": [
      {
        "skill": "",
        "category": "",
        "priority": "",
        "industry_importance": "",
        "upskilling_path": "",
        "course_recommendations": {
          "platforms": [],
          "search_keyword": ""
        }
      }
    ],

    "industry_trends": {
      "high_value_topics": [],
      "outdated_topics": [],
      "emerging_skills": []
    },

    "recommended_projects": [
      {
        "title": "",
        "difficulty": "",
        "skills_used": [],
        "learning_outcome": "",
        "resume_value": "",
        "suggested_tools": []
      }
    ],

    "career_trajectory": [
      {
        "year": "Year 1",
        "focus": "",
        "milestones": [],
        "recommended_projects": [],
        "certifications": [],
        "internship_goals": [],
        "tool_mastery": [],
        "placement_strategy": ""
      },
      {
        "year": "Year 2",
        "focus": "",
        "milestones": [],
        "recommended_projects": [],
        "certifications": [],
        "internship_goals": [],
        "tool_mastery": [],
        "placement_strategy": ""
      },
      {
        "year": "Year 3",
        "focus": "",
        "milestones": [],
        "recommended_projects": [],
        "certifications": [],
        "internship_goals": [],
        "tool_mastery": [],
        "placement_strategy": ""
      },
      {
        "year": "Year 4",
        "focus": "",
        "milestones": [],
        "recommended_projects": [],
        "certifications": [],
        "internship_goals": [],
        "tool_mastery": [],
        "placement_strategy": ""
      },
      {
        "year": "Post-Graduation",
        "focus": "",
        "milestones": [],
        "recommended_projects": [],
        "certifications": [],
        "internship_goals": [],
        "tool_mastery": [],
        "placement_strategy": ""
      }
    ]
  }
}
`;
  const response = await model.invoke(prompt);

  // Safe JSON extraction
  const rawText =
    typeof response.content === "string"
      ? response.content
      : response.content.map(c => c.text || "").join("");

  const jsonMatch = rawText.match(/\{[\s\S]*\}/);

  if (!jsonMatch) {
    throw new Error("No valid JSON found");
  }

  return JSON.parse(jsonMatch[0]);
}
