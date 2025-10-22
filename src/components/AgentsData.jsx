import IMG1 from "../assets/image-1.png";
import IMG2 from "../assets/image-2.png";
import IMG3 from "../assets/image-3.png";
import IMG4 from "../assets/image-4.png";
import IMG5 from "../assets/image-5.png";
import IMG6 from "../assets/image-6.png";
import IMG7 from "../assets/image-7.png";
import IMG8 from "../assets/image-8.png";
import IMG9 from "../assets/image-9.png";
import IMG10 from "../assets/image-10.png";
import IMG11 from "../assets/image-11.png";
import IMG12 from "../assets/image-12.png";
import IMG13 from "../assets/image-13.png";
import IMG14 from "../assets/image-14.png";
import IMG15 from "../assets/image-15.png";
import IMG16 from "../assets/image-16.png";
import IMG17 from "../assets/image-17.png";
import IMG18 from "../assets/image-18.png";
import IMG19 from "../assets/image-19.png";
import IMG20 from "../assets/image-20.png";
import IMG21 from "../assets/image-21.png";
import IMG22 from "../assets/image-22.png";
import IMG23 from "../assets/image-23.png";
import IMG24 from "../assets/image-24.png";
import IMG25 from "../assets/image-25.png";
import IMG26 from "../assets/image-26.png";
import IMG27 from "../assets/image-27.png";
import IMG28 from "../assets/image-28.png";
import P1 from "../assets/pistol-1.png";
import P2 from "../assets/pistol-2.png";
import P3 from "../assets/pistol-3.png";
import P4 from "../assets/pistol-4.png";
import P5 from "../assets/pistol-5.png";
import P6 from "../assets/pistol-6.png";
import P7 from "../assets/pistol-7.png";
import P8 from "../assets/pistol-8.png";
import P9 from "../assets/pistol-9.png";
import P10 from "../assets/pistol-10.png";
import P11 from "../assets/pistol-11.png";
import P12 from "../assets/pistol-12.png";
import P13 from "../assets/pistol-13.png";
import P14 from "../assets/pistol-14.png";
import P15 from "../assets/pistol-15.png";
import P16 from "../assets/pistol-16.png";
import P17 from "../assets/pistol-17.png";
import P18 from "../assets/pistol-18.png";
import P19 from "../assets/pistol-19.png";
import P20 from "../assets/pistol-20.png";
import P21 from "../assets/pistol-21.png";
import P22 from "../assets/pistol-22.png";
import P23 from "../assets/pistol-23.png";
import P24 from "../assets/pistol-24.png";
import P25 from "../assets/pistol-25.png";
import P26 from "../assets/pistol-26.png";
import P27 from "../assets/pistol-27.png";
import P28 from "../assets/pistol-28.png";

const agents = [
  {
    id: 1,
    name: "Brimstone",
    role: "Controller",
    gender: "Male",
    nationality: "United States",
    abilities: ["Stim Beacon", "Incendiary", "Sky Smoke", "Orbital Strike"],
    description:
      "Brimstone is one of the first Agents that met VALORANT fans in the beta version. Since then, many players loved the Agent's ability to smoke certain places, such as bomb site entrances as well as the Incendiary, which is very useful if launched right. Today, we will show you everything about Brimstone, the Agent's abilities, lore, tips and tricks, voice actor, lineups on certain maps, and many more!",
    image: IMG1,
    pistol: P1,
  },
  {
    id: 2,
    name: "Omen",
    role: "Controller",
    nationality: "Unknown",
    gender: "Male",
    abilities: ["Shrouded Step", "Paranoia", "Dark Cover", "From the Shadows"],
    description:
      "Omen is one of the oldest and most effective Controller Agents in VALORANT, and their impact is definitely an important factor to think about. Yesterday, today, and tomorrow, Omen will always stay relevant, and they will stay a popular pick for ranked games and the professional arena. In this guide, we will talk about everything you need to know about Omen, including their abilities, lore, and more!",
    image: IMG2,
    pistol: P2,
  },
  {
    id: 3,
    name: "Viper",
    role: "Controller",
    gender: "Female",
    nationality: "United States",
    abilities: ["Poison Cloud", "Snake Bite", "Toxic Screen", "Viper's Pit"],
    description:
      "As the closed beta for VALORANT continues, many people are beginning to see just how powerful many of the Agents are in Riot Games' new FPS. One Agent, in particular, has accumulated a cult following within the community. That character being Viper (U.S.A), has seen an increase of play due to the fact that she has been found to be one of the most useful support characters within the game. Her abilities can set up many different plays for team executes, site retakes, and more! She is a character that needs a methodical approach and finesse, but anyone who masters her will surely change the outcome of almost any game. Keep reading for an in-depth guide on the core details of Viper so you can dominate with her in your next VALORANT session.",
    image: IMG3,
    pistol: P3,
  },
  {
    id: 4,
    name: "Raze",
    role: "Duelist",
    gender: "Female",
    nationality: "Brazil",
    abilities: ["Boom Bot", "Paint Shells", "Cluster Grenade", "Showstopper"],
    description:
      "The day that closed beta for Riot Games' new FPS VALORANT was finally open for the public, players were just beginning to share their first impressions of the game. One of the most common things that were spoken about all over Reddit and Twitter, was the fact that the Agent Raze (Brazil) was one of the most powerful characters in the game and needed to be nerfed. After a recent balance patch, the community has become a bit happier with the way she is played. Today, we will break down her abilities and how effective Raze can be used in a team environment!",
    image: IMG4,
    pistol: P4,
  },
  {
    id: 5,
    name: "Sage",
    role: "Sentinel",
    gender: "Female",
    nationality: "China",
    abilities: ["Barrier Orb", "Slow Orb", "Healing Orb", "Resurrection"],
    description:
      "he meta is beginning to be set in stone as we continue our journey through the closed beta of VALORANT. One of the most influential characters in the meta currently is Sage (China). Sage is the only specific healing character, so she is almost a must pick for top teams. She also has a lot of utility in her kit that slows the opposing team quite a bit. We are about to break down her abilities for you in this week's Agents of VALORANT.",
    image: IMG5,
    pistol: P5,
  },
  {
    id: 6,
    name: "Phoenix",
    role: "Duelist",
    gender: "Male",
    nationality: "United Kingdom",
    abilities: ["Blaze", "Curveball", "Hot Hands", "Run It Back"],
    description:
      "Phoenix was one of the Agents that welcomed us in the beta version of VALORANT. The “fire boy” is also one of the coolest-looking Agents with their urban-styled outfit and hairstyle. This guide will talk about everything you need to know about Phoenix, whether their lore, abilities, the voice behind the Agent, their age, and much more!",
    image: IMG6,
    pistol: P6,
  },
  {
    id: 7,
    name: "Jett",
    role: "Duelist",
    gender: "Female",
    nationality: "South Korea",
    abilities: ["Tailwind", "Cloudburst", "Updraft", "Blade Storm"],
    description:
      "In the early days of the VALORANT closed beta, one Agent was a major talking point due to her mobility and playmaking power. That Agent is none other than Jett from South Korea, who is a high flying, extremely versatile character in the game. If used correctly, Jett has the ability to change the course of whole rounds, as well as whole games. This breakdown of her abilities is sure to give you an edge as we give you the details of her kit.",
    image: IMG7,
    pistol: P7,
  },
  {
    id: 8,
    name: "Neon",
    gender: "Female",
    abilities: ["Fast Lane", "Relay Bolt", "High Gear", "Overdrive"],
    nationality: "Philippines",
    role: "Duelist",
    description:
      "Neon is the 19th agent to join the VALORANT Protocol, the 18th agent and sixth duelist to be released in the game. The agent hails from Manila, Philippines, is short-statured but makes up for her lack of height with her athletic abilities and bursts of speed. Equipped with the power to generate electricity to aid her in times of need, Neon quickly became popular in the competitive VALORANT scene by successfully disrupting the meta.",
    image: IMG8,
    pistol: P8,
  },
  {
    id: 9,
    name: "Sova",
    gender: "Male",
    abilities: ["Recon Bolt", "Owl Drone", "Shock Bolt", "Hunter's Fury"],
    nationality: "Russia",
    role: "Initiator",
    description:
      "There are very few Agents in VALORANT that are specifically meant to be intel gatherers. Sova (Russia) is one of those characters. With the versatility of his kit, Sova is able to show enemy positions, and do some damage with his arrows as well. This installment will cover everything you need to know to be the best bolt-slinging Sova main on the battlefield.",
    image: IMG9,
    pistol: P9,
  },
  {
    id: 10,
    name: "Cypher",
    gender: "Male",
    abilities: ["Spycam", "Cyber Cage", "Trapwire", "Neural Theft"],
    nationality: "Morocco",
    role: "Sentinel",
    description:
      "The one-man surveillance network every information broker wishes they could be, Cypher's ability to keep tabs on friend and foe alike is nothing short of mythical. Watcher of watchers, stealer of secrets, Cypher is always one step ahead.",
    image: IMG10,
    pistol: P10,
  },
  {
    id: 11,
    name: "Reyna",
    gender: "Female",
    abilities: ["Leer", "Devour", "Dismiss", "Empress"],
    nationality: "Mexico",
    role: "Duelist",
    description:
      "With the full release of VALORANT, the community got a lot of cool new features! We received a map, a new battle pass, and some new updates in Patch 1.0. But most importantly we got a new Agent to test out and play in the form of Reyna, who hails from Mexico. With only a couple of weeks to test her out, the community is sure to find out more ways to use her effectively. But as we are just getting started, here is a deep dive into her abilities!",
    image: IMG11,
    pistol: P11,
  },
  {
    id: 12,
    name: "Killjoy",
    gender: "Female",
    abilities: ["Nanoswarm", "Alarmbot", "Turret", "Lockdown"],
    nationality: "Germany",
    role: "Sentinel",
    description:
      "Killjoy is one of the unique Sentinels with an ability kit that can be effective on offense and defense. The Agent can defend a whole bomb site on their own thanks to their varying abilities and also a great team player at times. If you want to know more about Killjoy, including their abilities, lore, voice actor, and their relationship with Raze, read the guide from top to bottom, as you will find everything you need to know!",
    image: IMG12,
    pistol: P12,
  },
  {
    id: 13,
    name: "Breach",
    gender: "Male",
    abilities: ["Flashpoint", "Fault Line", "Aftershock", "Rolling Thunder"],
    nationality: "Sweden",
    role: "Initiator",
    description:
      "The past few weeks of the VALORANT closed beta has begun to let other Agents shine more and more. From the different abilities, to the focus on teamwork needed to execute amazing plays, VALORANT has been evermore exciting. The Agent that still hasn't received a lot of love in the community would be none other than Breach (Sweden). Breach is an extremely dynamic character that can provide a lot of utility for his team. So in this installment of Agents of VALORANT we are going to break down the intricacies of his abilities to make you the most effective Breach main yet.",
    image: IMG13,
    pistol: P13,
  },
  {
    id: 14,
    name: "Skye",
    gender: "Female",
    abilities: ["Trailblazer", "Guiding Light", "Regrowth", "Seekers"],
    nationality: "Australia",
    role: "Initiator",
    description:
      "One of the most well-liked choices among gamers who enjoy playing the Initiator role is Skye, the thirteenth agent in VALORANT. When compared to other flash agents in VALORANT, their ability to flash enemies is one of the most effective weapons in the game because it regenerates over time. That is not all about Skye, though.",
    image: IMG14,
    pistol: P14,
  },
  {
    id: 15,
    name: "Yoru",
    gender: "Male",
    abilities: ["Blindside", "Gatecrash", "Fakeout", "Dimensional Drift"],
    nationality: "Japan",
    role: "Duelist",
    description:
      "Yoru is a Valorant agent known for his disruptive playstyle. His abilities include teleportation, blinding flashes, and a dimensional rift. As a duelist, he excels at confusing enemies and creating opportunities for his team. Yoru's deceptive tactics make him a challenging opponent to predict and counter in the game.",
    image: IMG15,
    pistol: P15,
  },
  {
    id: 16,
    name: "Astra",
    gender: "Female",
    abilities: ["Nova Pulse", "Nebula", "Gravity Well", "Cosmic Divide"],
    nationality: "Ghana",
    role: "Controller",
    description:
      "Astra is a strategic Valorant agent hailing from Ghana. Her unique abilities revolve around harnessing the power of the cosmos to control the battlefield. She can place stars that create gravity wells, smokescreens, and stunning novas. Astra's versatile toolkit offers precise map control, making her an invaluable asset for tactical teams.",
    image: IMG16,
    pistol: P16,
  },
  {
    id: 17,
    name: "Kay/O",
    gender: "Male",
    abilities: ["Flash/Drive", "Zero/Point", "Frag/Ment", "Null/CMD"],
    nationality: "Alternate Timeline Earth",
    role: "Initiator",
    description:
      "Kay/O is a Valorant agent recognized for his combat-focused abilities. As an Initiator, he brings utility with abilities like a suppression blade that disables enemy abilities, a flash grenade, and a frag grenade. Kay/O's kit is designed for disrupting enemy strategies and providing team support by neutralizing enemy abilities.",
    image: IMG17,
    pistol: P17,
  },
  {
    id: 18,
    name: "Chamber",
    gender: "Male",
    abilities: ["Headhunter", "Rendezvous", "Trademark", "Tour de Force"],
    nationality: "France",
    role: "Sentinel",
    description:
      "Chamber, a French agent in Valorant, specializes in sniper skills, offering a unique addition to the game's roster.",
    image: IMG18,
    pistol: P18,
  },
  {
    id: 19,
    name: "Fade",
    gender: "Female",
    abilities: ["Prowler", "Seize", "Haunt ", "Nightfall"],
    nationality: "Turkey",
    role: "Initiator",
    description: `Fade is a versatile Valorant agent with potent crowd control abilities. His "Prowler" seeks out and near-sights enemies, "Seize" immobilizes and weakens foes, and "Haunt" Reveals and disrupts enemy positions. His ultimate, "Nightfall," unleashes a debilitating wave of nightmare energy, making him a formidable force in the game.`,
    image: IMG19,
    pistol: P19,
  },
  {
    id: 20,
    name: "Harbor",
    gender: "Male",
    abilities: ["Cove", "High Tide", "Cascade ", "Reckoning"],
    nationality: "India",
    role: "Controller",
    description: `Harbor is a water-wielding agent with a versatile set of abilities. Their Q ability, Cove, creates a protective sphere of water that blocks bullets and vision. E, High Tide, conjures a mobile water wall that slows down foes. Cascade (C) allows Harbor to project a wave through walls, hindering enemy agents. Finally, their ultimate, Reckoning (X), unleashes a series of concussive geyser strikes, providing potent crowd control. Harbor's kit combines defensive and offensive elements, making them a formidable force in any tactical scenario.`,
    image: IMG20,
    pistol: P20,
  },
  {
    id: 21,
    name: "Gekko",
    gender: "Male",
    abilities: ["Wingman", "Dizzy", "Most Pit ", "Thrash"],
    nationality: "USA",
    role: "Initiator",
    description: `Gekko is a versatile agent with a collection of unique abilities. With Wingman (Q), they can scout out enemies and deliver concussive strikes or aid in Spike-related tasks. Dizzy (E) rains blinding plasma blasts on foes, disrupting their vision. Mosh Pit (C) creates explosive chaos, and their ultimate, Thrash (X), allows them to telepathically control and detonate Thrash to detain multiple enemy agents. Gekko's kit offers a blend of reconnaissance, crowd control, and damage-dealing, making them a formidable force on the battlefield.`,
    image: IMG21,
    pistol: P21,
  },
  {
    id: 22,
    name: "Deadlock",
    gender: "Female",
    abilities: ["Sonic Sensor", "Barrier Mesh", "GravNet ", "Annihilation"],
    nationality: "Norway",
    role: "Sentinel",
    description: `Fade is a versatile Valorant agent with potent crowd control abilities. His "Prowler" seeks out and near-sights enemies, "Seize" immobilizes and weakens foes, and "Haunt" Reveals and disrupts enemy positions. His ultimate, "Nightfall," unleashes a debilitating wave of nightmare energy, making him a formidable force in the game.`,
    image: IMG22,
    pistol: P22,
  },
  {
    id: 23,
    name: "Clove",
    gender: "Female",
    abilities: ["Meddle", "Ruse", "Pick Me Up", "Not Dead Yet"],
    nationality: "Scotland",
    role: "Controller",
    description: `Clove is fearless as they do not see death as a scary thing, in fact, they see it as beautiful. They are described as a Scottish troublemaker, which can be told in part by their bold personality; getting into the fight, without holding back.`,
    image: IMG23,
    pistol: P23,
  },
  {
    id: 24,
    name: "Iso",
    gender: "Male",
    abilities: ["Contingency", "Undercut", "Double Tap", "Kill Contract"],
    nationality: "China",
    role: "Duelist",
    description: `Chinese hitman Li Zhao Yu is a radiant with the ability to transmute ambient, intangible radianite energy into solid, durable constructs. A former assassin for the Scions of Hourglass, Li gained a fearsome reputation for his high effectiveness. Though it was said that anyone who would go up against him would disappear for good, rumors still spread beyond about the "Dead Lilac", a bulletproof wizard who could take out entire squads with one round and condemn targets to their fate in a flash of purple.`,
    image: IMG24,
    pistol: P24,
  },
  {
    id: 25,
    name: "Vyse",
    gender: "Female",
    abilities: ["Razorvine", "Shear", "Arc Rose", "Steel Garden"],
    nationality: "Unknown",
    role: "Sentinel",
    description: `Vyse is shown to be confident, calculative and arrogant. This is evident from when Vyse demanded without negotiation that she should take charge of the VALORANT Protocol's Interverse project when the information and research presented to her were amateurish. She was however willing to align with the Protocol's visions once her own demands were met first. Much of her past is however unknown, which can deem her overall personality as mysterious.`,
    image: IMG25,
    pistol: P25,
  },
  {
    id: 26,
    name: "Tejo",
    gender: "Male",
    abilities: [
      "Stealth Drone",
      "Special Delivery",
      "Guided Salvo",
      "Armageddon",
    ],
    nationality: "Colombia",
    role: "Initiator",
    description: `Colombian Tejo is the VALORANT Protocol's twenty-seventh recruit. A formerly-retired intelligence consultant, his unexpected arrival at the Protocol comes as a surprise to the rest of its agents, returning from a period of now interrupted leave to find a stranger suddenly wandering around HQ.`,
    image: IMG26,
    pistol: P26,
  },
  {
    id: 27,
    name: "Waylay",
    gender: "Female",
    abilities: ["Saturate", "Lightspeed", "Refract", "Convergent Paths"],
    nationality: "Thailand",
    role: "Duelist",
    description: `A radiant from Thailand, Ariya Saengkaew (Thai: อาริยา แสงแก้ว) is the VALORANT Protocol's twenty-eighth recruit. She joins the Protocol at the request of her longtime friend Tejo to bring some more experience to the organization as it begins to confront a new threat to Alpha Earth.`,
    image: IMG27,
    pistol: P27,
  },
  {
    id: 28,
    name: "Veto",
    gender: "Male",
    abilities: ["Crosscut", "Chokehold", "Interceptor", "Evolution"],
    nationality: "Senegal",
    role: "Sentinel",
    description: `Empowered by an unstoppable DNA mutation, Senegalese enforcer Veto defies the rules of engagement by nullifying his opponent's powers and technology. On Veto's battlefield, gunplay is your only guarantee.`,
    image: IMG28,
    pistol: P28,
  },
];

export default agents;
