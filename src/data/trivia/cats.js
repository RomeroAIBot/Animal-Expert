// Hand-checked cat trivia. Same rules as the other category files: each question replaces one
// imported question, and its `evidence` phrase must appear on the source page
// (`npm run check:sources -- --category=cat --rewritten`).

export const catQuestions = [
  // Heart and kidney disease
  {
    id: 'cat-0319',
    replaces: 'imported-cat-0319',
    topic: 'Health',
    question: 'What is the most common heart disease in domestic cats?',
    options: ['Hypertrophic cardiomyopathy', 'Dilated cardiomyopathy', 'Mitral valve disease', 'Heartworm disease'],
    answer: 'Hypertrophic cardiomyopathy',
    funFact: 'Known as HCM, it thickens the heart muscle. It is not present at birth but develops over time.',
    source: 'https://en.wikipedia.org/wiki/Hypertrophic_cardiomyopathy',
    evidence: 'feline hypertrophic cardiomyopathy (hcm) is the most common heart disease in domestic cats'
  },
  {
    id: 'cat-0321',
    replaces: 'imported-cat-0321',
    topic: 'Health',
    question: 'How is hypertrophic cardiomyopathy inherited in Maine Coon cats?',
    options: ['Autosomal dominant', 'Autosomal recessive', 'X-linked recessive', 'It is never inherited'],
    answer: 'Autosomal dominant',
    funFact: 'One copy of the mutation can cause disease, so breeders DNA-test and screen hearts with ultrasound.',
    source: 'https://en.wikipedia.org/wiki/Hypertrophic_cardiomyopathy',
    evidence: 'in maine coon cats, hcm has been confirmed as an autosomal dominant inherited trait'
  },
  {
    id: 'cat-0351',
    replaces: 'imported-cat-0351',
    topic: 'Health',
    question: 'Besides the Maine Coon, which breed has its own identified heart-muscle gene mutation linked to HCM?',
    options: ['Ragdoll', 'Abyssinian', 'Russian Blue', 'Turkish Angora'],
    answer: 'Ragdoll',
    funFact: 'Both breeds\' mutations are in the gene for cardiac myosin-binding protein C, but at different spots.',
    source: 'https://en.wikipedia.org/wiki/Hypertrophic_cardiomyopathy',
    evidence: 'mutation has been identified in ragdoll cats with hcm'
  },
  {
    id: 'cat-0328',
    replaces: 'imported-cat-0328',
    topic: 'Health',
    question: 'Hereditary polycystic kidney disease is especially common in which breed?',
    options: ['Persian', 'Siamese', 'Abyssinian', 'Maine Coon'],
    answer: 'Persian',
    funFact: 'It has affected almost half of Persians in some countries. Breeds with Persian ancestry can carry it too.',
    source: 'https://en.wikipedia.org/wiki/Persian_cat',
    evidence: 'hereditary polycystic kidney disease (pkd) is prevalent in the breed'
  },
  {
    id: 'cat-0421',
    replaces: 'imported-cat-0421',
    topic: 'Health',
    question: 'What is the "peke-face" or "ultra-type" Persian?',
    options: [
      'An extremely flat-faced, brachycephalic Persian',
      'A Persian crossed with a Pekingese dog',
      'A long-nosed traditional Persian',
      'A Persian with folded ears'
    ],
    answer: 'An extremely flat-faced, brachycephalic Persian',
    funFact: 'The shortened face brings breathing, eye and dental problems, a major welfare concern in the breed.',
    source: 'https://en.wikipedia.org/wiki/Persian_cat',
    evidence: 'flat-nosed "peke-face" or "ultra-type"'
  },

  // Coat color genetics
  {
    id: 'cat-0333',
    replaces: 'imported-cat-0333',
    topic: 'Genetics',
    question: 'Why are calico cats almost always female?',
    options: [
      'The orange gene is on the X chromosome, and females have two Xs',
      'Male kittens with calico coats do not survive birth',
      'Calico color depends on female hormones',
      'Calico is a breed bred only from females'
    ],
    answer: 'The orange gene is on the X chromosome, and females have two Xs',
    funFact: 'With one X carrying orange and the other non-orange, a female can show both colors in patches.',
    source: 'https://en.wikipedia.org/wiki/Cat_coat_genetics',
    evidence: 'this gene is located on the x chromosome'
  },
  {
    id: 'cat-0334',
    replaces: 'imported-cat-0334',
    topic: 'Genetics',
    question: 'Which process creates the patchwork of orange and black in tortoiseshell and calico cats?',
    options: ['X-inactivation', 'Crossing over', 'Polyploidy', 'Gene duplication'],
    answer: 'X-inactivation',
    funFact: 'Early in development, one X chromosome is switched off at random in each cell, so patches of fur show different colors.',
    source: 'https://en.wikipedia.org/wiki/Tortoiseshell_cat',
    evidence: 'undergo the phenomenon of x-inactivation'
  },
  {
    id: 'cat-0335',
    replaces: 'imported-cat-0335',
    topic: 'Genetics',
    question: 'A rare male calico cat usually has which chromosome pattern?',
    options: ['XXY', 'XY', 'XO', 'XYY'],
    answer: 'XXY',
    funFact: 'This is Klinefelter syndrome. It can affect the cat\'s health and lifespan, and such males are usually sterile.',
    source: 'https://en.wikipedia.org/wiki/Calico_cat',
    evidence: 'a condition referred to as xxy, or klinefelter syndrome'
  },
  {
    id: 'cat-0435',
    replaces: 'imported-cat-0435',
    topic: 'Genetics',
    question: 'Chocolate and cinnamon coat colors in cats are recessive variants of which gene?',
    options: ['TYRP1 (the B locus)', 'MC1R (the E locus)', 'KIT (the W locus)', 'ASIP (the A locus)'],
    answer: 'TYRP1 (the B locus)',
    funFact: 'Chocolate is a rich dark brown; cinnamon is a warmer, lighter brown and is recessive to chocolate.',
    source: 'https://en.wikipedia.org/wiki/Cat_coat_genetics',
    evidence: 'the browning gene b/b/bl codes for tyrp1'
  },
  {
    id: 'cat-0422',
    replaces: 'imported-cat-0422',
    topic: 'Genetics',
    question: 'Odd-eyed cats, with one blue eye and one copper, green or yellow eye, are usually what color?',
    options: ['White or mostly white', 'Solid black', 'Orange tabby', 'Chocolate point'],
    answer: 'White or mostly white',
    funFact: 'The white-spotting genes that remove pigment from the coat can also remove it from one iris.',
    source: 'https://en.wikipedia.org/wiki/Heterochromia_iridum',
    evidence: 'odd-eyed cats are white, or mostly white'
  },
  {
    id: 'cat-0425',
    replaces: 'imported-cat-0425',
    topic: 'Genetics',
    question: 'Which of these is NOT one of the four recognized tabby patterns?',
    options: ['Brindled', 'Mackerel', 'Classic (blotched)', 'Ticked'],
    answer: 'Brindled',
    funFact: 'The four patterns are mackerel, classic, ticked and spotted. "Tabby" is a coat pattern, not a breed.',
    source: 'https://en.wikipedia.org/wiki/Tabby_cat',
    evidence: 'the four known distinct tabby patterns are mackerel, classic (or blotched), ticked, and spotted'
  },
  {
    id: 'cat-0418',
    replaces: 'imported-cat-0418',
    topic: 'Genetics',
    question: 'Polydactyl cats, with extra toes, are also known by which nickname?',
    options: ['Hemingway cats', 'Lincoln cats', 'Darwin cats', 'Twain cats'],
    answer: 'Hemingway cats',
    funFact: 'The trait is inherited dominantly through a mutation in the ZRS regulatory region. Sailors once saw polydactyl cats as lucky.',
    source: 'https://en.wikipedia.org/wiki/Polydactyl_cat',
    evidence: 'became known as "hemingway cats"'
  },

  // Breeds and their genes
  {
    id: 'cat-0349',
    replaces: 'imported-cat-0349',
    topic: 'Breeds',
    question: 'The Scottish Fold\'s folded ears come with which inherited health condition?',
    options: ['Osteochondrodysplasia', 'Polycystic kidney disease', 'Progressive retinal atrophy', 'Hip dysplasia'],
    answer: 'Osteochondrodysplasia',
    funFact: 'The same dominant mutation, in the TRPV4 gene, affects cartilage throughout the body.',
    source: 'https://en.wikipedia.org/wiki/Scottish_Fold',
    evidence: 'associated with feline osteochondrodysplasia'
  },
  {
    id: 'cat-0353',
    replaces: 'imported-cat-0353',
    topic: 'Breeds',
    question: 'The Sphynx\'s hairlessness is mainly due to a mutation in which gene?',
    options: ['KRT71', 'LPAR6', 'TRPV4', 'FGF5'],
    answer: 'KRT71',
    funFact: 'Different variants of the same gene give the Devon Rex and Selkirk Rex their curly coats.',
    source: 'https://en.wikipedia.org/wiki/Sphynx_cat',
    evidence: 'mutation in the krt71 gene'
  },
  {
    id: 'cat-0434',
    replaces: 'imported-cat-0434',
    topic: 'Breeds',
    question: 'The Cornish Rex\'s wavy coat is caused by a mutation in which gene?',
    options: ['LPAR6', 'KRT71', 'TYR', 'TRPV4'],
    answer: 'LPAR6',
    funFact: 'The Devon Rex looks similar but its curl comes from KRT71, so the two breeds\' coats are genetically different.',
    source: 'https://en.wikipedia.org/wiki/Cornish_Rex',
    evidence: 'lysophosphatidic acid receptor 6 (lpar6)'
  },
  {
    id: 'cat-0419',
    replaces: 'imported-cat-0419',
    topic: 'Breeds',
    question: 'Which inherited muscle disease is found in some Devon Rex cats?',
    options: ['Hereditary myopathy', 'Muscular dystrophy', 'Myasthenia gravis', 'Malignant hyperthermia'],
    answer: 'Hereditary myopathy',
    funFact: 'It is caused by a variant in the COLQ gene and causes weakness, especially in the neck.',
    source: 'https://en.wikipedia.org/wiki/Devon_Rex',
    evidence: 'hereditary myopathy is found in some devon rexes'
  },
  {
    id: 'cat-0355',
    replaces: 'imported-cat-0355',
    topic: 'Breeds',
    question: 'The American Curl\'s backward-curling ears trace back to a stray cat found where in 1981?',
    options: ['Lakewood, California', 'Perthshire, Scotland', 'Cornwall, England', 'Toronto, Canada'],
    answer: 'Lakewood, California',
    funFact: 'The black female, named Shulamith, passed the dominant curl gene to her kittens.',
    source: 'https://en.wikipedia.org/wiki/American_Curl',
    evidence: 'lakewood, california in june 1981'
  },
  {
    id: 'cat-0356',
    replaces: 'imported-cat-0356',
    topic: 'Breeds',
    question: 'The Savannah was developed by crossing domestic cats with which wild cat?',
    options: ['Serval', 'Asian leopard cat', 'Caracal', 'Ocelot'],
    answer: 'Serval',
    funFact: 'The Bengal, by contrast, comes from the Asian leopard cat.',
    source: 'https://en.wikipedia.org/wiki/Savannah_cat',
    evidence: 'hybridisation of a serval (leptailurus serval) with a domestic cat'
  },
  {
    id: 'cat-0361',
    replaces: 'imported-cat-0361',
    topic: 'Breeds',
    question: 'In the Netherlands and Belgium, which Savannah cats are illegal to own or breed?',
    options: ['F1 to F4 generations', 'Only F1 cats', 'All Savannahs', 'None; all are legal'],
    answer: 'F1 to F4 generations',
    funFact: 'Rules vary widely. Australia has banned importing Savannahs because larger cats could threaten native wildlife.',
    source: 'https://en.wikipedia.org/wiki/Savannah_cat',
    evidence: 'their f1-f4 generation hybrid savannah offspring'
  },
  {
    id: 'cat-0357',
    replaces: 'imported-cat-0357',
    topic: 'Breeds',
    question: 'The Bengal breed was created by crossing domestic cats with which wild species?',
    options: ['Asian leopard cat', 'Serval', 'Bengal tiger', 'Jungle cat'],
    answer: 'Asian leopard cat',
    funFact: 'The spotted Egyptian Mau was one of the main domestic breeds used. Bengal coats range from spots and rosettes to marbling.',
    source: 'https://en.wikipedia.org/wiki/Bengal_cat',
    evidence: 'crossbreeding an asian leopard cat to domestic cats'
  },
  {
    id: 'cat-0360',
    replaces: 'imported-cat-0360',
    topic: 'Breeds',
    question: 'The serval, ancestor of the Savannah, catches prey by leaping how high?',
    options: ['Over 2 meters (6.5 feet)', 'About 50 centimeters', 'About 1 meter', 'Over 5 meters'],
    answer: 'Over 2 meters (6.5 feet)',
    funFact: 'Servals find prey by sound with their very large ears, then pounce to land on it with their forefeet.',
    source: 'https://en.wikipedia.org/wiki/Serval',
    evidence: 'it leaps over 2 m'
  },
  {
    id: 'cat-0398',
    replaces: 'imported-cat-0398',
    topic: 'Breeds',
    question: 'The Turkish Angora is named after which Turkish city?',
    options: ['Ankara', 'Istanbul', 'Izmir', 'Van'],
    answer: 'Ankara',
    funFact: 'Its Turkish name, Ankara kedisi, means "Ankara cat". The Turkish Van is named after Lake Van.',
    source: 'https://en.wikipedia.org/wiki/Turkish_Angora',
    evidence: "ankara kedisi, 'ankara cat'"
  },
  {
    id: 'cat-0399',
    replaces: 'imported-cat-0399',
    topic: 'Breeds',
    question: 'Which breed is often called hypoallergenic because it produces less of the allergen Fel d 1?',
    options: ['Siberian', 'Persian', 'Maine Coon', 'British Shorthair'],
    answer: 'Siberian',
    funFact: 'Individual cats vary a lot, so no breed is guaranteed safe for people with allergies.',
    source: 'https://en.wikipedia.org/wiki/Siberian_cat',
    evidence: 'produces less fel d 1 than other cat breeds'
  },
  {
    id: 'cat-0401',
    replaces: 'imported-cat-0401',
    topic: 'Breeds',
    question: 'Early-onset progressive retinal atrophy in Abyssinians is caused by a dominant mutation in which gene?',
    options: ['CRX', 'KRT71', 'PKD1', 'TYR'],
    answer: 'CRX',
    funFact: 'A separate, late-onset form is caused by a recessive mutation in the rdAc gene.',
    source: 'https://en.wikipedia.org/wiki/Abyssinian_cat',
    evidence: 'early onset pra is caused by an autosomal dominant mutation in the crx gene'
  },
  {
    id: 'cat-0402',
    replaces: 'imported-cat-0402',
    topic: 'Breeds',
    question: 'Glycogen storage disease type IV is a rare, potentially fatal inherited disorder in which breed?',
    options: ['Norwegian Forest Cat', 'Sphynx', 'Siamese', 'Scottish Fold'],
    answer: 'Norwegian Forest Cat',
    funFact: 'It is caused by a rearrangement in the GBE1 gene, and a DNA test can identify carriers.',
    source: 'https://en.wikipedia.org/wiki/Norwegian_Forest_cat',
    evidence: 'glycogen storage disease type iv in the breed'
  },
  {
    id: 'cat-0420',
    replaces: 'imported-cat-0420',
    topic: 'Breeds',
    question: 'The blue-gray Chartreux, known for its "smile", comes from which country?',
    options: ['France', 'Russia', 'England', 'Thailand'],
    answer: 'France',
    funFact: 'It has a water-resistant double coat and orange or copper eyes.',
    source: 'https://en.wikipedia.org/wiki/Chartreux',
    evidence: 'rare breed of cat from france'
  },
  {
    id: 'cat-0428',
    replaces: 'imported-cat-0428',
    topic: 'Breeds',
    question: 'Which registry recognizes the Colorpoint Shorthair as its own breed, separate from the Siamese?',
    options: ["The Cat Fanciers' Association (CFA)", 'The International Cat Association (TICA)', 'The Kennel Club', 'The American Kennel Club'],
    answer: "The Cat Fanciers' Association (CFA)",
    funFact: 'Colorpoint Shorthairs are Siamese-type cats in point colors beyond the four classic Siamese colors, such as red point.',
    source: 'https://en.wikipedia.org/wiki/Colorpoint_Shorthair',
    evidence: "the cat fanciers' association (cfa)"
  },
  {
    id: 'cat-0429',
    replaces: 'imported-cat-0429',
    topic: 'Breeds',
    question: 'The Governing Council of the Cat Fancy (GCCF) is the largest pedigree cat registry in which country?',
    options: ['United Kingdom', 'United States', 'Australia', 'Canada'],
    answer: 'United Kingdom',
    funFact: 'Its Supreme Show is sometimes called the cat world\'s equivalent of Crufts.',
    source: 'https://en.wikipedia.org/wiki/Governing_Council_of_the_Cat_Fancy',
    evidence: 'registers pedigree cats in the united kingdom'
  },

  // Infectious disease
  {
    id: 'cat-0369',
    replaces: 'imported-cat-0369',
    topic: 'Health',
    question: 'Feline infectious peritonitis (FIP) develops from a mutated form of which common virus?',
    options: ['Feline coronavirus', 'Feline herpesvirus', 'Feline calicivirus', 'Feline parvovirus'],
    answer: 'Feline coronavirus',
    funFact: 'Most cats carry the coronavirus harmlessly; fewer than 10 percent develop FIP from a mutated form.',
    source: 'https://en.wikipedia.org/wiki/Feline_infectious_peritonitis',
    evidence: 'caused by the mutated fcov'
  },
  {
    id: 'cat-0367',
    replaces: 'imported-cat-0367',
    topic: 'Health',
    question: 'What are the two main forms of FIP?',
    options: [
      'Effusive (wet) and non-effusive (dry)',
      'Acute and chronic',
      'Respiratory and digestive',
      'Juvenile and adult'
    ],
    answer: 'Effusive (wet) and non-effusive (dry)',
    funFact: 'The wet form, which causes fluid buildup in the belly or chest, is more common.',
    source: 'https://en.wikipedia.org/wiki/Feline_infectious_peritonitis',
    evidence: 'two main forms of fip: effusive (wet) and non-effusive (dry)'
  },
  {
    id: 'cat-0368',
    replaces: 'imported-cat-0368',
    topic: 'Health',
    question: 'Which antiviral drug, a nucleoside analogue, has transformed the treatment of FIP?',
    options: ['GS-441524', 'Acyclovir', 'Oseltamivir', 'Amantadine'],
    answer: 'GS-441524',
    funFact: 'It was developed by Gilead Sciences and is the main metabolite of remdesivir. FIP was long considered almost always fatal.',
    source: 'https://en.wikipedia.org/wiki/GS-441524',
    evidence: 'nucleoside analogue antiviral drug'
  },
  {
    id: 'cat-0370',
    replaces: 'imported-cat-0370',
    topic: 'Health',
    question: 'How is feline immunodeficiency virus (FIV) mainly spread?',
    options: ['Deep bite wounds', 'Shared food bowls', 'Mosquito bites', 'Litter box dust'],
    answer: 'Deep bite wounds',
    funFact: 'Casual contact like grooming carries little risk, which is why FIV is more common in fighting, outdoor males.',
    source: 'https://en.wikipedia.org/wiki/Feline_immunodeficiency_virus',
    evidence: 'the primary mode of transmission is via deep bite wounds'
  },
  {
    id: 'cat-0371',
    replaces: 'imported-cat-0371',
    topic: 'Health',
    question: 'Feline leukemia virus (FeLV) spreads mainly through what?',
    options: ['Saliva and nasal secretions', 'Flea bites', 'Contaminated soil', 'Airborne dust'],
    answer: 'Saliva and nasal secretions',
    funFact: 'Mutual grooming and shared bowls can pass it on, so it spreads more easily than FIV.',
    source: 'https://en.wikipedia.org/wiki/Feline_leukemia_virus',
    evidence: 'transfer of saliva or nasal secretions'
  },
  {
    id: 'cat-0392',
    replaces: 'imported-cat-0392',
    topic: 'Health',
    question: 'What is the most common cancer diagnosed in cats?',
    options: ['Lymphoma', 'Osteosarcoma', 'Melanoma', 'Mast cell tumor'],
    answer: 'Lymphoma',
    funFact: 'In young cats it often follows infection with feline leukemia virus.',
    source: 'https://en.wikipedia.org/wiki/Lymphoma_in_animals',
    evidence: 'lymphoma is the most common malignancy diagnosed in cats'
  },
  {
    id: 'cat-0393',
    replaces: 'imported-cat-0393',
    topic: 'Health',
    question: 'Lymphoma in young cats most often follows infection with which virus?',
    options: ['Feline leukemia virus (FeLV)', 'Feline calicivirus', 'Feline herpesvirus', 'Rabies virus'],
    answer: 'Feline leukemia virus (FeLV)',
    funFact: 'Feline immunodeficiency virus raises the risk too, to a lesser degree.',
    source: 'https://en.wikipedia.org/wiki/Lymphoma_in_animals',
    evidence: 'following infection with feline leukemia virus (felv)'
  },
  {
    id: 'cat-0374',
    replaces: 'imported-cat-0374',
    topic: 'Health',
    question: 'Cats that recover from feline herpesvirus often do what for the rest of their lives?',
    options: [
      'Shed the virus intermittently as carriers',
      'Become permanently immune and virus-free',
      'Lose their sense of smell',
      'Need daily antiviral drugs'
    ],
    answer: 'Shed the virus intermittently as carriers',
    funFact: 'Stress can reactivate the latent virus, bringing back sneezing and eye problems.',
    source: 'https://en.wikipedia.org/wiki/Feline_viral_rhinotracheitis',
    evidence: 'will shed fhv-1 intermittently for life'
  },
  {
    id: 'cat-0407',
    replaces: 'imported-cat-0407',
    topic: 'Health',
    question: 'Which supplement has long been used for feline herpesvirus, though a 2015 review questioned whether it works?',
    options: ['Lysine', 'Taurine', 'Vitamin C', 'Glucosamine'],
    answer: 'Lysine',
    funFact: 'Topical antiviral eye drops are another treatment option for herpes eye disease.',
    source: 'https://en.wikipedia.org/wiki/Feline_viral_rhinotracheitis',
    evidence: 'lysine is commonly used as a treatment'
  },
  {
    id: 'cat-0405',
    replaces: 'imported-cat-0405',
    topic: 'Health',
    question: 'Why is feline panleukopenia so dangerous in shelters?',
    options: [
      'The virus can survive in the environment for over a year',
      'It spreads only through blood transfusions',
      'It only affects adult cats',
      'There is no vaccine for it'
    ],
    answer: 'The virus can survive in the environment for over a year',
    funFact: 'It is a parvovirus, highly contagious and often fatal to kittens. Vaccination is the main protection.',
    source: 'https://en.wikipedia.org/wiki/Feline_panleukopenia',
    evidence: 'can survive for longer than one year in a suitable environment'
  },
  {
    id: 'cat-0395',
    replaces: 'imported-cat-0395',
    topic: 'Health',
    question: 'Feline calicivirus is known for causing which sign in the mouth?',
    options: ['Ulcers', 'Extra teeth', 'Black gums', 'Swollen tongue tip'],
    answer: 'Ulcers',
    funFact: 'It also causes fever, sneezing, eye inflammation and nasal discharge.',
    source: 'https://en.wikipedia.org/wiki/Feline_calicivirus',
    evidence: 'ulceration of the mouth'
  },

  // Endocrine, urinary and other medicine
  {
    id: 'cat-0375',
    replaces: 'imported-cat-0375',
    topic: 'Health',
    question: 'Which treatment offers a permanent cure for feline hyperthyroidism?',
    options: ['Radioactive iodine', 'Daily insulin injections', 'A high-protein diet', 'Antibiotics'],
    answer: 'Radioactive iodine',
    funFact: 'Surgery to remove the thyroid is the other permanent option. Medication such as methimazole manages it daily.',
    source: 'https://en.wikipedia.org/wiki/Feline_hyperthyroidism',
    evidence: 'treated with radioactive iodine or thyroidectomy for a permanent solution'
  },
  {
    id: 'cat-0376',
    replaces: 'imported-cat-0376',
    topic: 'Health',
    question: 'Why can treating hyperthyroidism in a cat seem to make its kidneys worse?',
    options: [
      'Hyperthyroidism raises kidney filtration and hides existing kidney disease',
      'The medication directly damages the kidneys',
      'Thyroid hormone protects the kidneys from all disease',
      'Treated cats drink far less water'
    ],
    answer: 'Hyperthyroidism raises kidney filtration and hides existing kidney disease',
    funFact: 'Vets often do a trial with medication first to see how the kidneys respond before a permanent cure.',
    source: 'https://en.wikipedia.org/wiki/Feline_hyperthyroidism',
    evidence: 'increase to the glomerular filtrat'
  },
  {
    id: 'cat-0363',
    replaces: 'imported-cat-0363',
    topic: 'Health',
    question: 'Which two types of bladder stones are most common in cats?',
    options: ['Struvite and calcium oxalate', 'Urate and cystine', 'Silicate and calcium phosphate', 'Cystine and silicate'],
    answer: 'Struvite and calcium oxalate',
    funFact: 'Feline idiopathic cystitis, another common urinary problem, is linked to stress.',
    source: 'https://en.wikipedia.org/wiki/Feline_lower_urinary_tract_disease',
    evidence: 'the most common types observed are struvite and calcium oxalate'
  },
  {
    id: 'cat-0451',
    replaces: 'imported-cat-0451',
    topic: 'Health',
    question: 'Which kind of bladder stone can often be dissolved with a special acidifying diet?',
    options: ['Struvite', 'Calcium oxalate', 'Silicate', 'Cystine'],
    answer: 'Struvite',
    funFact: 'Struvite is magnesium ammonium phosphate. Calcium oxalate stones usually need to be removed.',
    source: 'https://en.wikipedia.org/wiki/Bladder_stone_(animal)',
    evidence: 'dissolution of the struvite stones depends on acidification of the urine'
  },
  {
    id: 'cat-0364',
    replaces: 'imported-cat-0364',
    topic: 'Health',
    question: 'Feline idiopathic cystitis, a common cause of urinary problems, is thought to be linked to what?',
    options: ['Stress', 'Eating too much protein', 'Drinking tap water', 'Too much sunlight'],
    answer: 'Stress',
    funFact: '"Idiopathic" means no definite cause is found. Reducing stress and adding enrichment often help.',
    source: 'https://en.wikipedia.org/wiki/Feline_lower_urinary_tract_disease',
    evidence: 'thought to be related to stress events'
  },
  {
    id: 'cat-0385',
    replaces: 'imported-cat-0385',
    topic: 'Nutrition',
    question: 'A diet lacking which amino acid can cause dilated cardiomyopathy and blindness in cats?',
    options: ['Taurine', 'Lysine', 'Glycine', 'Alanine'],
    answer: 'Taurine',
    funFact: 'Cats cannot make enough taurine themselves, so it is added to commercial cat food.',
    source: 'https://en.wikipedia.org/wiki/Taurine',
    evidence: 'other effects of a diet lacking in taurine are dilated cardiomyopathy'
  },
  {
    id: 'cat-0386',
    replaces: 'imported-cat-0386',
    topic: 'Nutrition',
    question: 'Cats are described as what kind of carnivore?',
    options: ['Obligate carnivore', 'Facultative carnivore', 'Omnivore', 'Insectivore'],
    answer: 'Obligate carnivore',
    funFact: 'They need a predominantly meat-based diet, and nutrients like taurine and arginine are essential.',
    source: 'https://en.wikipedia.org/wiki/Cat',
    evidence: 'an obligate carnivore requiring a predominantly meat-based diet'
  },
  {
    id: 'cat-0390',
    replaces: 'imported-cat-0390',
    topic: 'Health',
    question: 'Which surgery is used to treat severe megacolon?',
    options: ['Colectomy', 'Gastropexy', 'Cystotomy', 'Splenectomy'],
    answer: 'Colectomy',
    funFact: 'Megacolon is a severely enlarged colon that can no longer push out stool, causing chronic constipation.',
    source: 'https://en.wikipedia.org/wiki/Megacolon',
    evidence: 'such as a colectomy'
  },
  {
    id: 'cat-0413',
    replaces: 'imported-cat-0413',
    topic: 'Health',
    question: 'Neonatal isoerythrolysis can kill newborn kittens that drink what?',
    options: [
      'Colostrum carrying their mother\'s antibodies against their blood type',
      'Cow\'s milk instead of their mother\'s milk',
      'Water too soon after birth',
      'Milk from a mother with an infection'
    ],
    answer: 'Colostrum carrying their mother\'s antibodies against their blood type',
    funFact: 'It happens when a type B mother has type A kittens. Blood-typing breeding cats prevents it.',
    source: 'https://en.wikipedia.org/wiki/Neonatal_isoerythrolysis',
    evidence: 'kittens obtain the majority of their immune response from the colostrum'
  },
  {
    id: 'cat-0414',
    replaces: 'imported-cat-0414',
    topic: 'Health',
    question: 'Why should cats be blood-typed before a transfusion?',
    options: [
      'Cats carry natural antibodies against the other blood type',
      'All cats share one blood type',
      'Cat blood clots too quickly',
      'It is only required by law'
    ],
    answer: 'Cats carry natural antibodies against the other blood type',
    funFact: 'A type B cat reacts especially badly to type A blood.',
    source: 'https://en.wikipedia.org/wiki/Blood_type_(non-human)',
    evidence: 'the reaction of type b cats to type a blood is more severe'
  },
  {
    id: 'cat-0474',
    replaces: 'imported-cat-0474',
    topic: 'Welfare',
    question: 'In many countries, declawing a cat is considered what?',
    options: ['An act of animal cruelty', 'A routine grooming procedure', 'A required vaccination step', 'A cosmetic hair treatment'],
    answer: 'An act of animal cruelty',
    funFact: 'Declawing removes the end bone of each toe, not just the claw. Scratching posts and nail trims are the usual alternatives.',
    source: 'https://en.wikipedia.org/wiki/Onychectomy',
    evidence: 'declawing is considered an act of animal cruelty in many countries'
  },

  // Behavior and senses
  {
    id: 'cat-0380',
    replaces: 'imported-cat-0380',
    topic: 'Behavior',
    question: 'A cat sniffs something, then opens its mouth in a grimace. What is this response called?',
    options: ['Flehmen response', 'Bunting', 'Kneading', 'Chattering'],
    answer: 'Flehmen response',
    funFact: 'The grimace helps move scents and pheromones to the vomeronasal organ in the roof of the mouth.',
    source: 'https://en.wikipedia.org/wiki/Flehmen_response',
    evidence: 'into the vomeronasal organ'
  },
  {
    id: 'cat-0381',
    replaces: 'imported-cat-0381',
    topic: 'Behavior',
    question: 'When a cat head-bumps a person or another cat, what is the behavior called?',
    options: ['Bunting', 'Kneading', 'Flehmen', 'Allogrooming'],
    answer: 'Bunting',
    funFact: 'It deposits scent from glands around the mouth and cheeks.',
    source: 'https://en.wikipedia.org/wiki/Cat_communication',
    evidence: 'cats sometimes "head-bump" humans or other cats with the front part of the head'
  },
  {
    id: 'cat-0457',
    replaces: 'imported-cat-0457',
    topic: 'Behavior',
    question: 'How does urine spraying differ from normal urination in cats?',
    options: [
      'The cat stands and marks a vertical surface',
      'The cat squats over a horizontal surface',
      'The cat only sprays inside the litter box',
      'Only kittens spray'
    ],
    answer: 'The cat stands and marks a vertical surface',
    funFact: 'Spraying is territorial marking, not a litter box problem. Normal urination is done squatting.',
    source: 'https://en.wikipedia.org/wiki/Cat_communication',
    evidence: 'cats urinate by squatting onto a horizontal surface'
  },
  {
    id: 'cat-0382',
    replaces: 'imported-cat-0382',
    topic: 'Behavior',
    question: "A cat's whiskers usually extend to about what width?",
    options: ['The width of its body', 'The width of its head only', 'Twice its body length', 'The length of its tail'],
    answer: 'The width of its body',
    funFact: 'Whiskers are sensitive touch organs, and cats also have them on the backs of their front legs.',
    source: 'https://en.wikipedia.org/wiki/Whiskers',
    evidence: 'extend out to about the same width as the cat\'s body'
  },
  {
    id: 'cat-0462',
    replaces: 'imported-cat-0462',
    topic: 'Behavior',
    question: 'Cats are described as crepuscular. When are crepuscular animals most active?',
    options: ['At dawn and dusk', 'In the middle of the day', 'Only in deep night', 'Only in winter'],
    answer: 'At dawn and dusk',
    funFact: 'That explains the early-morning wake-up calls many cat owners know well.',
    source: 'https://en.wikipedia.org/wiki/Crepuscular_animal',
    evidence: 'active around dusk'
  },
  {
    id: 'cat-0445',
    replaces: 'imported-cat-0445',
    topic: 'Behavior',
    question: 'A cat enjoys being stroked, then suddenly bites and runs off. What is this often called?',
    options: ['Petting and biting syndrome', 'Redirected kneading', 'Flehmen aggression', 'Bunting reflex'],
    answer: 'Petting and biting syndrome',
    funFact: 'Watching for tail lashing or skin twitching and stopping early helps avoid it.',
    source: 'https://en.wikipedia.org/wiki/Cat_behavior',
    evidence: 'petting and biting syndrome'
  },
  {
    id: 'cat-0472',
    replaces: 'imported-cat-0472',
    topic: 'Anatomy',
    question: "A cat's third eyelid is also informally called what?",
    options: ['The haw', 'The brow', 'The lid flap', 'The tear shield'],
    answer: 'The haw',
    funFact: 'Its scientific name is the nictitating membrane. If it stays visible, it can be a sign of illness.',
    source: 'https://en.wikipedia.org/wiki/Nictitating_membrane',
    evidence: 'third eyelid or haw'
  },

  // Reproduction and life
  {
    id: 'cat-0410',
    replaces: 'imported-cat-0410',
    topic: 'Reproduction',
    question: 'About how long is a cat\'s pregnancy?',
    options: ['64 to 67 days', '30 to 35 days', '90 to 100 days', '4 to 5 months'],
    answer: '64 to 67 days',
    funFact: 'The average is about 65 days. Kittens in one litter can have different fathers.',
    source: 'https://en.wikipedia.org/wiki/Cat',
    evidence: 'the gestation of queens lasts between 64 and 67 days'
  },
  {
    id: 'cat-0461',
    replaces: 'imported-cat-0461',
    topic: 'Lifespan',
    question: 'Creme Puff, the oldest cat in Guinness World Records, lived to what age?',
    options: ['38 years', '25 years', '30 years', '45 years'],
    answer: '38 years',
    funFact: 'She lived in Austin, Texas, and died at 38 years and 3 days old.',
    source: 'https://en.wikipedia.org/wiki/Creme_Puff_(cat)',
    evidence: 'at the age of 38 years and 3 days'
  },
  {
    id: 'cat-0343',
    replaces: 'imported-cat-0343',
    topic: 'Welfare',
    question: 'In trap-neuter-return (TNR), what happens to a free-roaming cat after it is sterilized?',
    options: [
      'It is returned to where it was found',
      'It is moved to a new colony far away',
      'It is kept permanently in a shelter',
      'It is released into a national park'
    ],
    answer: 'It is returned to where it was found',
    funFact: 'Sterilized colony cats are often ear-tipped so they can be recognized at a distance.',
    source: 'https://en.wikipedia.org/wiki/Trap%E2%80%93neuter%E2%80%93return',
    evidence: 'then returns it to where it was found'
  },
  // Added from "Trivia Questions to add to the database.txt" (October 2026), checked the same way.
  {
    id: 'cat-n01',
    topic: 'Breeds',
    question: 'On the Isle of Man, what is a Manx cat with no tail at all called?',
    options: ['Rumpy', 'Stumpy', 'Stubbin', 'Longy'],
    answer: 'Rumpy',
    funFact: 'A stubbin has a short tail, and a stumpy has a partial tail of fused vertebrae.',
    source: 'https://en.wikipedia.org/wiki/Manx_cat',
    evidence: 'rumpy (those with no tail)'
  },
  {
    id: 'cat-n02',
    topic: 'Breeds',
    question: 'The short-legged Munchkin breed began with a cat found in 1983 in which town?',
    options: ['Rayville, Louisiana', 'Lakewood, California', 'Austin, Texas', 'Phoenix, Arizona'],
    answer: 'Rayville, Louisiana',
    funFact: 'Some registries refuse to recognize the Munchkin, calling its short legs a genetic disease (achondroplasia).',
    source: 'https://en.wikipedia.org/wiki/Munchkin_cat',
    evidence: 'sandra hochenedel, a music teacher in rayville, louisiana'
  },
  {
    id: 'cat-n03',
    topic: 'Breeds',
    question: 'British breeders created the Havana Brown in the 1950s by crossing chocolate-carrying Siamese with what?',
    options: ['Black domestic shorthairs', 'Russian Blues', 'Burmese', 'Abyssinians'],
    answer: 'Black domestic shorthairs',
    funFact: 'Its eyes must be green and its whiskers brown.',
    source: 'https://en.wikipedia.org/wiki/Havana_Brown',
    evidence: 'chocolate-carrying siamese and domestic shorthair black cats',
    // A crossbreeding question, so breed names are the right kind of wrong option.
    allowChecks: ['off-topic-distractor']
  },
  {
    id: 'cat-n04',
    topic: 'Breeds',
    question: 'Which silver-tipped blue-grey breed is probably first mentioned in the Thai Tamra Maew, or cat-book poems?',
    options: ['Korat', 'Russian Blue', 'Chartreux', 'Nebelung'],
    answer: 'Korat',
    funFact: 'It is named after its home province, Nakhon Ratchasima, which Thais call Korat.',
    source: 'https://en.wikipedia.org/wiki/Korat',
    evidence: 'probable first allusion to the breed is in the thai tamra maew'
  },
  {
    id: 'cat-n05',
    topic: 'Anatomy',
    question: 'The backward-facing spines on a cat\'s tongue are stiffened by which material?',
    options: ['Keratin', 'Collagen', 'Cartilage', 'Enamel'],
    answer: 'Keratin',
    funFact: 'The spines, called filiform papillae, work like a hairbrush during grooming.',
    source: 'https://en.wikipedia.org/wiki/Cat',
    evidence: 'called filiform papillae, which contain keratin making them rigid'
  },
  {
    id: 'cat-n06',
    topic: 'Anatomy',
    question: 'Thanks to free-floating collarbones, a cat can squeeze through any opening that fits what?',
    options: ['Its head', 'Its whiskers', 'Its front paw', 'Its tail'],
    answer: 'Its head',
    funFact: 'A cat\'s forelimbs are attached to the shoulders only by these free-floating clavicle bones.',
    source: 'https://en.wikipedia.org/wiki/Cat',
    evidence: 'pass their body through any space into which they can fit their head'
  },
  {
    id: 'cat-n07',
    topic: 'Anatomy',
    question: 'A falling cat works out which way is down with its eyes or with which part of its inner ear?',
    options: ['The vestibular apparatus', 'The cochlea', 'The eardrum', 'The Eustachian tube'],
    answer: 'The vestibular apparatus',
    funFact: 'This cat righting reflex needs a fall of at least about 90 cm (3 feet) to work.',
    source: 'https://en.wikipedia.org/wiki/Cat_righting_reflex',
    evidence: 'after determining down from up visually or with their vestibular apparatus'
  },
  {
    id: 'cat-n08',
    topic: 'Behavior',
    question: 'What is a cat signalling when it blinks slowly?',
    options: ['Relaxation and comfort', 'A challenge to fight', 'Pain in its eyes', 'That it is hungry'],
    answer: 'Relaxation and comfort',
    funFact: 'Domestic cats rely a great deal on visual signals like this.',
    source: 'https://en.wikipedia.org/wiki/Cat_communication',
    evidence: 'slowly blinking to signal relaxation and comfort'
  },
  {
    id: 'cat-n09',
    topic: 'Behavior',
    question: 'Kneading in adult cats is thought to come from which kitten behavior?',
    options: [
      'Kneading the mother\'s teat to start milk',
      'Digging a hole to bury waste',
      'Flattening grass before sleeping',
      'Sharpening the claws on bark'
    ],
    answer: 'Kneading the mother\'s teat to start milk',
    funFact: 'Kittens taken from their mothers before weaning may keep the habit of kneading and suckling.',
    source: 'https://en.wikipedia.org/wiki/Kneading_(cats)',
    evidence: 'kneading of the mother\'s teat to stimulate milk secretion'
  },
  {
    id: 'cat-n10',
    topic: 'Behavior',
    question: 'Which feline facial pheromone do cats commonly leave when they rub their face on objects?',
    options: ['F3', 'F4', 'Feline appeasing pheromone', 'MMB'],
    answer: 'F3',
    funFact: 'Scientists have identified facial pheromones F1 to F5, plus a feline appeasing pheromone.',
    source: 'https://en.wikipedia.org/wiki/Cat_pheromone',
    evidence: 'feline facial pheromone f3 is a chemical commonly released through object rubbing'
  },
  {
    id: 'cat-n11',
    topic: 'Health',
    question: 'Feline herpesvirus 1 targets the surface of the eye. What shape are the corneal ulcers it often causes?',
    options: ['Pinpoint or dendritic (branching)', 'Large and perfectly round', 'Ring-shaped around the pupil', 'Triangular at the eye corner'],
    answer: 'Pinpoint or dendritic (branching)',
    funFact: 'The virus can also cause conjunctivitis and other inflammation of the eye.',
    source: 'https://en.wikipedia.org/wiki/Feline_viral_rhinotracheitis',
    evidence: 'corneal ulcers, often pinpoint or dendritic in shape'
  },
  {
    id: 'cat-n12',
    topic: 'Kittens',
    question: 'Why must foster carers gently stimulate very young kittens after feeding?',
    options: [
      'They can\'t urinate or defecate on their own',
      'It helps their eyes and ears open',
      'It stops them from getting hiccups',
      'It teaches them where the litter box is'
    ],
    answer: 'They can\'t urinate or defecate on their own',
    funFact: 'Newborn kittens also can\'t regulate their body temperature for the first three weeks.',
    source: 'https://en.wikipedia.org/wiki/Kitten',
    evidence: 'kittens cannot urinate or defecate without being stimulated by their mother'
  },
  {
    id: 'cat-n13',
    topic: 'History',
    question: 'The domestic cat descends from which wild cat?',
    options: ['African wildcat', 'European wildcat', 'Sand cat', 'Pallas\'s cat'],
    answer: 'African wildcat',
    funFact: 'Some African wildcats were domesticated about 10,000 years ago in the Near East.',
    source: 'https://en.wikipedia.org/wiki/African_wildcat',
    evidence: 'the african wildcat is the ancestor of the domestic cat'
  },
  {
    id: 'cat-n14',
    topic: 'History',
    question: 'A cat buried beside a person at a Neolithic farming site shows early farmers took cats to which island?',
    options: ['Cyprus', 'Crete', 'Malta', 'Sicily'],
    answer: 'Cyprus',
    funFact: 'Cats had to be carried there by boat, so people were already keeping them closely.',
    source: 'https://en.wikipedia.org/wiki/Domestication_of_the_cat',
    evidence: 'transport them to cyprus'
  },
  {
    id: 'cat-n15',
    topic: 'History',
    question: 'According to the historian Diodorus Siculus, how did ancient Egyptians regard killing a cat?',
    options: ['As a serious crime', 'As a minor offence', 'As a religious duty', 'As acceptable in famine'],
    answer: 'As a serious crime',
    funFact: 'Egyptian deities shown with cat-like heads include Bastet, Sekhmet and Mafdet.',
    source: 'https://en.wikipedia.org/wiki/Cats_in_ancient_Egypt',
    evidence: 'killing a cat was regarded as a serious crime'
  },
  {
    id: 'cat-n16',
    topic: 'History',
    question: 'Who proposed the scientific name Felis catus for the domestic cat in 1758?',
    options: ['Carl Linnaeus', 'Johann Erxleben', 'Georges Cuvier', 'Charles Darwin'],
    answer: 'Carl Linnaeus',
    funFact: 'Erxleben proposed Felis catus domesticus in 1777.',
    source: 'https://en.wikipedia.org/wiki/Cat',
    evidence: 'felis catus was proposed by carl linnaeus in 1758'
  },
  // Added from "cat_trivia_master_file (2).md" (October 2026), checked the same way.
  {
    id: 'cat-c01',
    topic: 'Breeds',
    question: 'The Egyptian Mau is one of the few domestic breeds with which naturally occurring coat pattern?',
    options: ['Spotted tabby', 'Ticked tabby', 'Colorpoint', 'Marbled tabby'],
    answer: 'Spotted tabby',
    funFact: 'Its spots appear only on the tips of the hairs.',
    source: 'https://en.wikipedia.org/wiki/Egyptian_Mau',
    evidence: 'one of the few naturally spotted tabby breeds'
  },
  {
    id: 'cat-c02',
    topic: 'Breeds',
    question: 'Which curly-coated breed began in Montana in 1987 with a litter born to a rescued cat?',
    options: ['Selkirk Rex', 'Devon Rex', 'Cornish Rex', 'LaPerm'],
    answer: 'Selkirk Rex',
    funFact: 'Its curly coat is autosomal dominant, and every Selkirk Rex traces back to one cat, Miss DePesto.',
    source: 'https://en.wikipedia.org/wiki/Selkirk_Rex',
    evidence: 'originated in montana, usa in 1987'
  },
  {
    id: 'cat-c03',
    topic: 'Breeds',
    question: 'The Japanese Bobtail\'s short tail comes from what kind of gene, one not linked to spine or bone problems?',
    options: ['A recessive gene', 'A dominant gene', 'An X-linked gene', 'A mitochondrial gene'],
    answer: 'A recessive gene',
    funFact: 'Its tail looks more like a rabbit\'s than a typical cat\'s. The breed was officially registered in the 1960s.',
    source: 'https://en.wikipedia.org/wiki/Japanese_Bobtail',
    evidence: 'the recessive gene paired with the shortened tails is not associated with any spinal or bone abnormalities'
  },
  {
    id: 'cat-c04',
    topic: 'Breeds',
    question: 'The Russian Blue is believed to have come from which Russian port?',
    options: ['Arkhangelsk', 'Saint Petersburg', 'Murmansk', 'Vladivostok'],
    answer: 'Arkhangelsk',
    funFact: 'That is why they are sometimes called Archangel Blues. Sailors are thought to have taken them to Britain in the 1860s.',
    source: 'https://en.wikipedia.org/wiki/Russian_Blue',
    evidence: 'may have originated in the port of arkhangelsk'
  },
  {
    id: 'cat-c05',
    topic: 'Breeds',
    question: 'Which breed is essentially a long-haired Siamese, with point coloring and sapphire-blue eyes?',
    options: ['Balinese', 'Birman', 'Himalayan', 'Ragdoll'],
    answer: 'Balinese',
    funFact: 'It is also known as the purebred long-haired Siamese.',
    source: 'https://en.wikipedia.org/wiki/Balinese_cat',
    evidence: 'is a long-haired breed of domestic cat with siamese-style point coloration'
  },
  {
    id: 'cat-c06',
    topic: 'Breeds',
    question: 'The hairless Peterbald was created in St. Petersburg in 1994 by crossing a Don Sphynx with which breed?',
    options: ['Oriental Shorthair', 'Sphynx', 'Siamese', 'Cornish Rex'],
    answer: 'Oriental Shorthair',
    funFact: 'Peterbalds have the slim, long-legged build of Oriental breeds.',
    source: 'https://en.wikipedia.org/wiki/Peterbald',
    evidence: 'from an experimental cross of a don sphynx and an oriental shorthair'
  },
  {
    id: 'cat-c07',
    topic: 'Breeds',
    question: 'Judy Sugden began breeding striped tabbies in the 1980s to create which tiger-like breed?',
    options: ['Toyger', 'Bengal', 'Ocicat', 'Pixie-bob'],
    answer: 'Toyger',
    funFact: 'The name comes from "toy tiger".',
    source: 'https://en.wikipedia.org/wiki/Toyger',
    evidence: "the breed's originator, judy sugden"
  },
  {
    id: 'cat-c08',
    topic: 'Breeds',
    question: 'The spotted Ocicat, named for its resemblance to the ocelot, was first bred from which two breeds?',
    options: ['Siamese and Abyssinian', 'Bengal and Savannah', 'Egyptian Mau and Bengal', 'Burmese and Persian'],
    answer: 'Siamese and Abyssinian',
    funFact: 'American Shorthairs were added to the breed later.',
    source: 'https://en.wikipedia.org/wiki/Ocicat',
    evidence: 'established by crossbreeding the siamese and abyssinian'
  },
  {
    id: 'cat-c09',
    topic: 'Kittens',
    question: 'At about what age do kittens normally open their eyes?',
    options: ['7 to 10 days', '1 to 2 days', '3 to 4 weeks', '6 to 8 weeks'],
    answer: '7 to 10 days',
    funFact: 'After about two weeks, kittens develop quickly and start exploring beyond the nest.',
    source: 'https://en.wikipedia.org/wiki/Kitten',
    evidence: 'they normally do not open their eyes for seven to ten days'
  },
  {
    id: 'cat-c10',
    topic: 'Kittens',
    question: 'At about what age do kittens begin eating solid food and growing baby teeth?',
    options: ['3 to 4 weeks', '1 week', '8 to 10 weeks', '4 months'],
    answer: '3 to 4 weeks',
    funFact: 'Weaning is usually complete by six to eight weeks.',
    source: 'https://en.wikipedia.org/wiki/Kitten',
    evidence: 'three to four weeks, they begin to eat solid food and grow baby teeth'
  },
  {
    id: 'cat-c11',
    topic: 'Kittens',
    question: 'In the first two days after birth, what do kittens gain from their mother\'s milk?',
    options: ['Passive immunity', 'Their eyesight', 'Their baby teeth', 'Body-heat control'],
    answer: 'Passive immunity',
    funFact: 'The milk carries antibodies that protect kittens against infectious diseases.',
    source: 'https://en.wikipedia.org/wiki/Kitten',
    evidence: 'within the first two days after birth, kittens acquire passive immunity'
  },
  {
    id: 'cat-c12',
    topic: 'Nutrition',
    question: 'Why does milk often upset adult cats\' stomachs?',
    options: [
      'Most adult cats are lactose intolerant',
      'Milk is toxic to the feline liver',
      'Cats cannot digest any animal fat',
      'Milk blocks their uptake of taurine'
    ],
    answer: 'Most adult cats are lactose intolerant',
    funFact: 'The sugar in milk is hard for them to digest and can cause soft stools or diarrhea.',
    source: 'https://en.wikipedia.org/wiki/Cat',
    evidence: 'most adult cats are lactose intolerant'
  },
  {
    id: 'cat-c13',
    topic: 'Senses',
    question: 'Why can\'t cats taste sweetness?',
    options: [
      'A taste receptor gene mutation',
      'They have no taste buds at all',
      'Their saliva breaks down sugar',
      'Their sense of smell overrides taste'
    ],
    answer: 'A taste receptor gene mutation',
    funFact: 'The mutation keeps their sweet taste buds from binding to sugary molecules.',
    source: 'https://en.wikipedia.org/wiki/Cat',
    evidence: 'share a taste receptor gene mutation that keeps their sweet taste buds from binding'
  },
  {
    id: 'cat-c14',
    topic: 'Behavior',
    question: 'How long do cats usually sleep each day?',
    options: ['12 to 16 hours', '6 to 8 hours', '8 to 10 hours', '20 to 22 hours'],
    answer: '12 to 16 hours',
    funFact: '13 to 14 hours is average, and some cats sleep as much as 20 hours.',
    source: 'https://en.wikipedia.org/wiki/Cat',
    evidence: 'usually between 12 and 16 hours, with 13 to 14 being the average'
  },
  {
    id: 'cat-c15',
    topic: 'Senses',
    question: 'What range of sound frequencies can a cat hear?',
    options: ['55 Hz to 79 kHz', '20 Hz to 20 kHz', '45 Hz to 45 kHz', '100 Hz to 10 kHz'],
    answer: '55 Hz to 79 kHz',
    funFact: 'People hear about 20 Hz to 20 kHz. A cat\'s hearing is sharpest between 500 Hz and 32 kHz.',
    source: 'https://en.wikipedia.org/wiki/Cat',
    evidence: 'ranging from 55 hz to 79 khz'
  },
  {
    id: 'cat-c16',
    topic: 'Anatomy',
    question: 'Where are most of a cat\'s sweat glands?',
    options: ['In its paw pads', 'Under its front legs', 'On its nose', 'Along its back'],
    answer: 'In its paw pads',
    funFact: 'Cats can barely sweat, and they pant for heat relief only at very high temperatures.',
    source: 'https://en.wikipedia.org/wiki/Cat_anatomy',
    evidence: 'with glands located primarily in their paw pads'
  },
  {
    id: 'cat-c17',
    topic: 'Anatomy',
    question: 'How many toes, each with a claw, does a typical cat have in total?',
    options: ['18', '16', '20', '22'],
    answer: '18',
    funFact: 'Five on each front foot, counting the dewclaw, and four on each hind foot.',
    source: 'https://en.wikipedia.org/wiki/Cat_anatomy',
    evidence: 'most cats have a total of 18 digits and claws'
  },
  {
    id: 'cat-c18',
    topic: 'Breeding',
    question: 'At about what age do female cats (queens) usually reach sexual maturity?',
    options: ['5 to 10 months', '2 to 3 months', '18 months', '2 years'],
    answer: '5 to 10 months',
    funFact: 'Males usually mature at 5 to 7 months. The age varies by breed.',
    source: 'https://en.wikipedia.org/wiki/Cat',
    evidence: 'queens normally reach sexual maturity at 5-10 months'
  },
  {
    id: 'cat-c19',
    topic: 'Terms',
    question: 'A male cat is a tom. What is a neutered male cat sometimes called?',
    options: ['A gib', 'A molly', 'A queen', 'A jack'],
    answer: 'A gib',
    funFact: 'A female is a queen, and a spayed female is sometimes called a molly.',
    source: 'https://en.wikipedia.org/wiki/Cat',
    evidence: '(or a gib, if neutered)'
  },
  {
    id: 'cat-c20',
    topic: 'Behavior',
    question: 'Studies show that domestic cats meow much more than which cats?',
    options: ['Feral cats', 'Kittens', 'Pedigree show cats', 'Senior cats'],
    answer: 'Feral cats',
    funFact: 'Cats rarely meow to communicate with other cats or animals; meowing is largely aimed at people.',
    source: 'https://en.wikipedia.org/wiki/Cat_communication',
    evidence: 'domestic cats tend to meow much more than feral cats'
  },
  {
    id: 'cat-c21',
    topic: 'Anatomy',
    question: 'Where are a cat\'s carpal vibrissae (whiskers) found?',
    options: [
      'On the underside of the leg, just above the paw',
      'Just above the eyes, on the brow',
      'Under the chin, near the lower lip',
      'Along the base of the tail, on top'
    ],
    answer: 'On the underside of the leg, just above the paw',
    funFact: 'Whiskers on the face, above the eyes and on the legs are all sensitive touch hairs.',
    source: 'https://en.wikipedia.org/wiki/Whiskers',
    evidence: 'on the underside of the leg just above the paws (called carpal vibrissae)'
  },
  {
    id: 'cat-c22',
    topic: 'Behavior',
    question: 'A cat\'s purr has a fundamental frequency of around what?',
    options: ['25 Hz', '250 Hz', '2,500 Hz', '25 kHz'],
    answer: '25 Hz',
    funFact: 'The purr is felt as a vibration on the surface of the body.',
    source: 'https://en.wikipedia.org/wiki/Purr',
    evidence: 'with a fundamental frequency of around 25 hz'
  },
  {
    id: 'cat-c23',
    topic: 'Health',
    question: 'True lilies are highly toxic to cats. Which organ do they damage?',
    options: ['The kidneys', 'The liver', 'The heart', 'The lungs'],
    answer: 'The kidneys',
    funFact: 'They damage the kidney tubules and can cause acute kidney failure, so veterinary help is urgent.',
    source: 'https://en.wikipedia.org/wiki/Lilium',
    evidence: 'which can cause acute kidney failure'
  },
  {
    id: 'cat-c24',
    topic: 'Behavior',
    question: 'About what share of cats are strongly attracted to catnip?',
    options: ['About two-thirds', 'Nearly all of them', 'About one-quarter', 'About one in ten'],
    answer: 'About two-thirds',
    funFact: 'The chemical responsible is nepetalactone, and whether a cat responds is hereditary.',
    source: 'https://en.wikipedia.org/wiki/Catnip',
    evidence: 'about two-thirds of cats have to the plant due to the terpene nepetalactone'
  },
  {
    id: 'cat-c25',
    topic: 'Health',
    question: 'Acetaminophen (paracetamol), garlic and onions can damage a cat\'s red blood cells, forming what?',
    options: ['Heinz bodies', 'Howell-Jolly bodies', 'Blood clots', 'Urine crystals'],
    answer: 'Heinz bodies',
    funFact: 'Never give a cat human painkillers or food seasoned with onion or garlic.',
    source: 'https://en.wikipedia.org/wiki/Heinz_body',
    evidence: 'the consumption of paracetamol (acetaminophen), garlic, and onions by cats'
  },
  {
    id: 'cat-c26',
    topic: 'Health',
    question: 'Severe infestations of which parasite can cause anemia from blood loss?',
    options: ['Cat fleas', 'Ear mites', 'Roundworms', 'Ringworm'],
    answer: 'Cat fleas',
    funFact: 'Cat fleas can also pass on other parasites.',
    source: 'https://en.wikipedia.org/wiki/Cat_flea',
    evidence: 'severe flea infestations can result in anemia due to blood loss'
  },
  {
    id: 'cat-c27',
    topic: 'Health',
    question: 'Feline hyperesthesia syndrome is also known by which name?',
    options: ['Rolling skin disease', 'Fading kitten syndrome', 'Pica', 'Petting and biting syndrome'],
    answer: 'Rolling skin disease',
    funFact: 'Episodes can include rippling skin along the lower back and over-grooming near the base of the tail.',
    source: 'https://en.wikipedia.org/wiki/Feline_hyperesthesia_syndrome',
    evidence: 'also known as rolling skin disease'
  },
  {
    id: 'cat-c28',
    topic: 'Senses',
    question: 'What reflective layer behind a cat\'s retina helps it see in dim light?',
    options: ['The tapetum lucidum', 'The nictitating membrane', 'The cornea', 'The fovea'],
    answer: 'The tapetum lucidum',
    funFact: 'It sends light that passed through the retina back for a second chance, which is why cats\' eyes shine at night.',
    source: 'https://en.wikipedia.org/wiki/Cat_senses',
    evidence: 'cats have a tapetum lucidum, which is a reflective layer behind the retina'
  },
  {
    id: 'cat-c29',
    topic: 'Senses',
    question: 'What does a cat\'s slit-shaped pupil do in very bright light?',
    options: [
      'Closes very narrowly to protect the retina',
      'Opens wide to take in more color',
      'Turns sideways to block glare',
      'Stays the same size as in the dark'
    ],
    answer: 'Closes very narrowly to protect the retina',
    funFact: 'Narrowing the pupil also sharpens depth of field.',
    source: 'https://en.wikipedia.org/wiki/Cat_senses',
    evidence: 'the slit-like pupil closes very narrowly over the eye'
  },
  {
    id: 'cat-c30',
    topic: 'Kittens',
    question: 'By about what age is a kitten\'s weaning usually complete?',
    options: ['6 to 8 weeks', '2 to 3 weeks', '12 to 14 weeks', '6 months'],
    answer: '6 to 8 weeks',
    funFact: 'Kittens are commonly sent to new homes at about six to eight weeks.',
    source: 'https://en.wikipedia.org/wiki/Kitten',
    evidence: 'with weaning usually complete by six to eight weeks'
  },
  // Added from the user's October 2026 list after dedupe and source checks.
  {
    id: 'cat-d01',
    topic: 'Breeds',
    question: 'Which Maine Coon feature helps it walk on snow, and is often compared to snowshoes?',
    options: ['Its large, fur-tufted paws', 'Its folded ears', 'Its short, stiff tail', 'Its hairless belly'],
    answer: 'Its large, fur-tufted paws',
    funFact: 'Its dense, water-resistant coat and bushy tail, which it can curl around its face, also help in harsh winters.',
    source: 'https://en.wikipedia.org/wiki/Maine_Coon',
    evidence: 'large paws facilitate walking on snow and are often compared to snowshoes'
  },
  {
    id: 'cat-d02',
    topic: 'Breeds',
    question: 'What does the skin of a Sphynx cat feel like?',
    options: ['Chamois leather', 'Coarse wire', 'Smooth plastic', 'Fish scales'],
    answer: 'Chamois leather',
    funFact: 'Sphynx cats may have very fine hairs or be completely hairless.',
    source: 'https://en.wikipedia.org/wiki/Sphynx_cat',
    evidence: 'texture of chamois leather'
  },
  {
    id: 'cat-d03',
    topic: 'Breeds',
    question: 'The native Van cats of Turkey are nicknamed what, because of their fascination with water?',
    options: ['The swimming cats', 'The fishing cats', 'The rain cats', 'The lake cats'],
    answer: 'The swimming cats',
    funFact: 'The Turkish Van has no obvious undercoat, only one coat layer, so its fur feels like cashmere.',
    source: 'https://en.wikipedia.org/wiki/Turkish_Van',
    evidence: 'have been nicknamed the "swimming cats"'
  },
  {
    id: 'cat-d04',
    topic: 'Genetics',
    question: 'The Abyssinian has a "ticked" tabby coat. What is special about each hair?',
    options: [
      'It is banded with different colors',
      'It is a single solid color',
      'It is white at the tip only',
      'It curls in a tight spiral'
    ],
    answer: 'It is banded with different colors',
    funFact: 'The ticked coat gives Abyssinians their wildcat look.',
    source: 'https://en.wikipedia.org/wiki/Abyssinian_cat',
    evidence: 'individual agouti hairs are banded with different colours'
  },
  {
    id: 'cat-d05',
    topic: 'Breeds',
    question: 'How did the Ragdoll breed get its name?',
    options: [
      'It tends to go limp and relaxed when picked up',
      'Its first owner sewed rag dolls',
      'Its coat looks like patchwork fabric',
      'It loves to carry toys in its mouth'
    ],
    answer: 'It tends to go limp and relaxed when picked up',
    funFact: 'The breed is especially popular in the United Kingdom and the United States.',
    source: 'https://en.wikipedia.org/wiki/Ragdoll',
    evidence: 'the name ragdoll is derived from the tendency to go limp and relaxed when picked up'
  },
  {
    id: 'cat-d06',
    topic: 'Senses',
    question: 'When a cat makes the Flehmen grimace, it is directing scents to which organ?',
    options: ['The vomeronasal (Jacobson\'s) organ', 'The cochlea', 'The tonsils', 'The thyroid gland'],
    answer: 'The vomeronasal (Jacobson\'s) organ',
    funFact: 'The organ was described by Ludwig Jacobson in 1813, which is why it carries his name.',
    source: 'https://en.wikipedia.org/wiki/Vomeronasal_organ',
    evidence: 'use a distinctive facial movement called the flehmen response to direct inhaled compounds to the vno'
  },
  {
    id: 'cat-d07',
    topic: 'History',
    question: 'Archaeology and genetics show that cat domestication began in the Near East around when?',
    options: ['7500 BC', '30,000 BC', '1500 BC', '500 AD'],
    answer: '7500 BC',
    funFact: 'Farming villages stored grain, which drew mice, and the mice drew wildcats.',
    source: 'https://en.wikipedia.org/wiki/Cat',
    evidence: 'the domestication of the cat started in the near east around 7500'
  },
  {
    id: 'cat-d08',
    topic: 'Health',
    question: 'What is the medical name for a hairball?',
    options: ['Trichobezoar', 'Lipoma', 'Granuloma', 'Polyp'],
    answer: 'Trichobezoar',
    funFact: 'A bezoar is any mass trapped in the gut; "tricho" means hair.',
    source: 'https://en.wikipedia.org/wiki/Hairball',
    evidence: 'a trichobezoar is a bezoar'
  },
  {
    id: 'cat-d09',
    topic: 'Health',
    question: 'What is the most common hormone (endocrine) disorder in cats?',
    options: ['Hyperthyroidism', 'Addison\'s disease', 'Hypothyroidism', 'Cushing\'s disease'],
    answer: 'Hyperthyroidism',
    funFact: 'Most cases come from benign tumors of the thyroid gland, usually in older cats.',
    source: 'https://en.wikipedia.org/wiki/Feline_hyperthyroidism',
    evidence: 'hyperthyroidism is the most common endocrinopathy of cats'
  },
  {
    id: 'cat-d10',
    topic: 'Genetics',
    question: 'Why are a Siamese cat\'s face, ears, paws and tail darker than its body?',
    options: [
      'A heat-sensitive pigment enzyme only works in cooler skin',
      'Those areas get more sunlight',
      'Kittens are born with dark points that never fade',
      'Those areas have more hair follicles'
    ],
    answer: 'A heat-sensitive pigment enzyme only works in cooler skin',
    funFact: 'The enzyme becomes active in skin cooler than about 33 °C (91 °F).',
    source: 'https://en.wikipedia.org/wiki/Siamese_cat',
    evidence: 'the mutated tyrosinase enzyme is heat-sensitive'
  },
  {
    id: 'cat-d11',
    topic: 'Terms',
    question: 'What is the term for having two eyes of different colors, as many odd-eyed white cats do?',
    options: ['Heterochromia', 'Anisocoria', 'Nystagmus', 'Albinism'],
    answer: 'Heterochromia',
    funFact: 'It is common in some breeds of cats, dogs, cattle and horses, but uncommon in humans.',
    source: 'https://en.wikipedia.org/wiki/Heterochromia_iridum',
    evidence: 'heterochromia of the eye is called heterochromia iridum'
  },
  {
    id: 'cat-d12',
    topic: 'Behavior',
    question: 'What is the general rule for how many litter boxes a home with cats needs?',
    options: ['One per cat, plus one extra', 'One for every two cats', 'One per room', 'One shared box is enough'],
    answer: 'One per cat, plus one extra',
    funFact: 'Placing them in different areas helps every cat feel safe using a box.',
    source: 'https://www.humanesociety.org/resources/preventing-litter-box-problems',
    evidence: 'one litter box per cat, plus one extra'
  }
];

// Imported questions removed rather than rewritten, with the reason.
export const retiredImportIds = {
  'imported-cat-0320': 'Merged into cat-0321 and cat-0351 (HCM genetics).',
  'imported-cat-0322': 'Testing laboratories change over time.',
  'imported-cat-0323': 'Merged into cat-0321 (HCM genetics).',
  'imported-cat-0324': 'Merged into cat-0319 (HCM).',
  'imported-cat-0325': 'No scriptable source found.',
  'imported-cat-0326': 'No scriptable source found.',
  'imported-cat-0327': 'No scriptable source found.',
  'imported-cat-0329': 'Merged into cat-0328 (polycystic kidney disease).',
  'imported-cat-0330': 'Merged into cat-0328 (polycystic kidney disease).',
  'imported-cat-0331': 'List question with several correct answers.',
  'imported-cat-0332': 'List question with several correct answers.',
  'imported-cat-0336': 'Merged into cat-0334 (tortoiseshell and calico).',
  'imported-cat-0337': 'Merged into cat-0333 (orange gene).',
  'imported-cat-0338': 'No scriptable source states the colorpoint mechanism.',
  'imported-cat-0339': 'List question with several correct answers.',
  'imported-cat-0340': 'No scriptable source found.',
  'imported-cat-0341': 'Yes/no question.',
  'imported-cat-0342': 'Sources disagree on the age window.',
  'imported-cat-0344': 'List question with several correct answers.',
  'imported-cat-0345': 'The claimed "universal" convention could not be confirmed.',
  'imported-cat-0346': 'Too vague for a single correct option.',
  'imported-cat-0347': 'Too vague for a single correct option.',
  'imported-cat-0348': 'Duplicate of the Turkish Van breed question.',
  'imported-cat-0350': 'Merged into cat-0349 (Scottish Fold).',
  'imported-cat-0352': 'Comparative breed description with no single answer.',
  'imported-cat-0354': 'The Peterbald gene claim could not be confirmed.',
  'imported-cat-0358': 'Merged into cat-0357 (Bengal).',
  'imported-cat-0359': 'List question with several correct answers.',
  'imported-cat-0362': 'Claim could not be confirmed.',
  'imported-cat-0365': 'List question with several correct answers.',
  'imported-cat-0366': 'No scriptable source found.',
  'imported-cat-0372': 'No scriptable source found for the definitions.',
  'imported-cat-0373': 'Vaccine guidance varies by organization and country.',
  'imported-cat-0377': 'No scriptable source found.',
  'imported-cat-0378': 'No scriptable source found.',
  'imported-cat-0379': 'No scriptable source found.',
  'imported-cat-0383': 'No scriptable source found.',
  'imported-cat-0384': 'No scriptable source found.',
  'imported-cat-0387': 'Source covers fatty liver generally, not cats specifically.',
  'imported-cat-0388': 'No scriptable source found.',
  'imported-cat-0389': 'Merged into cat-0390 (megacolon).',
  'imported-cat-0391': 'No scriptable source found.',
  'imported-cat-0394': 'No scriptable source found for the injection sites.',
  'imported-cat-0396': 'No scriptable source found.',
  'imported-cat-0397': 'Registry rules change over time.',
  'imported-cat-0400': 'No scriptable source found.',
  'imported-cat-0403': 'Claims could not be confirmed.',
  'imported-cat-0404': 'No scriptable source found.',
  'imported-cat-0406': 'Merged into cat-0374 (herpesvirus).',
  'imported-cat-0408': 'No scriptable source found.',
  'imported-cat-0409': 'No scriptable source found.',
  'imported-cat-0411': 'No scriptable source found.',
  'imported-cat-0412': 'Unclear question.',
  'imported-cat-0415': 'No scriptable source found for breed percentages.',
  'imported-cat-0416': 'No scriptable source found.',
  'imported-cat-0417': 'Vaccine schedules vary.',
  'imported-cat-0423': 'Too vague for a single correct option.',
  'imported-cat-0424': '"Oldest recognized breed" is ambiguous.',
  'imported-cat-0426': 'Merged into cat-0425 (tabby).',
  'imported-cat-0427': 'No scriptable source defines tipping clearly.',
  'imported-cat-0430': 'Claim could not be confirmed.',
  'imported-cat-0431': 'Show preferences vary.',
  'imported-cat-0432': 'Original answer said there is no standard.',
  'imported-cat-0433': 'No scriptable source found.',
  'imported-cat-0436': 'Merged into cat-0435 (brown genes).',
  'imported-cat-0437': 'Too vague for a single correct option.',
  'imported-cat-0438': 'No scriptable source found.',
  'imported-cat-0439': 'List question with several correct answers.',
  'imported-cat-0440': 'Too vague for a single correct option.',
  'imported-cat-0441': 'Personality descriptions are subjective.',
  'imported-cat-0442': 'List question with several correct answers.',
  'imported-cat-0443': 'Too vague for a single correct option.',
  'imported-cat-0444': 'Too vague for a single correct option.',
  'imported-cat-0446': 'Opinion question with no single correct answer.',
  'imported-cat-0447': 'The named ASPCA concept could not be found.',
  'imported-cat-0448': 'No scriptable source found.',
  'imported-cat-0449': 'No scriptable source found.',
  'imported-cat-0450': 'Several common causes; no single answer.',
  'imported-cat-0452': 'Merged into cat-0451 (bladder stones).',
  'imported-cat-0453': 'Vaccine guidance varies.',
  'imported-cat-0454': 'Sensitive topic with no single factual answer.',
  'imported-cat-0455': 'List question with several correct answers.',
  'imported-cat-0456': 'Merged into cat-0364 (cystitis).',
  'imported-cat-0458': 'Statistic could not be confirmed.',
  'imported-cat-0459': 'No scriptable source found.',
  'imported-cat-0460': 'Lifespan figures vary between sources.',
  'imported-cat-0463': 'Too vague for a single correct option.',
  'imported-cat-0464': 'Figures vary widely.',
  'imported-cat-0465': 'No scriptable source found.',
  'imported-cat-0466': 'No scriptable source found.',
  'imported-cat-0467': 'No scriptable source found.',
  'imported-cat-0468': 'Unclear question.',
  'imported-cat-0469': 'The named framework does not exist as a standard.',
  'imported-cat-0470': 'Opinion question.',
  'imported-cat-0471': 'No scriptable source found.',
  'imported-cat-0473': 'List question with several correct answers.',
  'imported-cat-0475': 'Not specific to cats.',
  'imported-cat-0476': 'The original answer said no such award exists.'
};
