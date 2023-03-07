const Cities=[
    { slug: "abohar", cityId: 10011, enabled: true },
    { slug: "adilabad", cityId: 10211, enabled: true },
    { slug: "adityapur", cityId: 209, enabled: true },
    { slug: "adoni", cityId: 10012, enabled: true },
    { slug: "agartala", cityId: 111, enabled: true },
    { slug: "agra", cityId: 45, enabled: true },
    { slug: "ahmedabad", cityId: 10, enabled: true },
    { slug: "ahmednagar", cityId: 124, enabled: true },
    { slug: "aizawl", cityId: 10568, enabled: true },
    { slug: "ajmer", cityId: 113, enabled: true },
    { slug: "akola", cityId: 178, enabled: true },
    { slug: "alappuzha", cityId: 164, enabled: true },
    { slug: "aligarh", cityId: 109, enabled: true },
    { slug: "alipurduar", cityId: 10599, enabled: true },
    { slug: "allahabad", cityId: 50, enabled: true },
    { slug: "almora", cityId: 10600, enabled: true },
    { slug: "alwar", cityId: 10154, enabled: true },
    { slug: "ambajogai", cityId: 10706, enabled: true },
    { slug: "ambala", cityId: 129, enabled: true },
    { slug: "ambikapur", cityId: 10084, enabled: true },
    { slug: "ambur", cityId: 10018, enabled: true },
    { slug: "amravati", cityId: 144, enabled: true },
    { slug: "amreli", cityId: 10144, enabled: true },
    { slug: "amritsar", cityId: 52, enabled: true },
    { slug: "anand", cityId: 93, enabled: true },
    { slug: "anantapur", cityId: 122, enabled: true },
    { slug: "ankleshwar", cityId: 10418, enabled: true },
    { slug: "arakkonam", cityId: 10659, enabled: true },
    { slug: "arambagh", cityId: 10606, enabled: true },
    { slug: "araria", cityId: 10707, enabled: true },
    { slug: "arrah", cityId: 10293, enabled: true },
    { slug: "asansol", cityId: 237, enabled: true },
    { slug: "aurangabad", cityId: 46, enabled: true },
    { slug: "aurangabadbihar", cityId: 10499, enabled: true },
    { slug: "azamgarh", cityId: 10195, enabled: true },
    { slug: "baddi", cityId: 10486, enabled: true },
    { slug: "bagalkot", cityId: 10264, enabled: true },
    { slug: "bagdogra", cityId: 10512, enabled: true },
    { slug: "bahadurgarh", cityId: 10196, enabled: true },
    { slug: "bahraich", cityId: 10194, enabled: true },
    { slug: "balaghat", cityId: 10436, enabled: true },
    { slug: "balangir", cityId: 10494, enabled: true },
    { slug: "balasore", cityId: 10560, enabled: true },
    { slug: "ballari", cityId: 130, enabled: true },
    { slug: "ballia", cityId: 10238, enabled: true },
    { slug: "balrampur", cityId: 10359, enabled: true },
    { slug: "balurghat", cityId: 10070, enabled: true },
    { slug: "banda", cityId: 10206, enabled: true },
    { slug: "bangalore", cityId: 1, enabled: true },
    { slug: "bankura", cityId: 10182, enabled: true },
    { slug: "baramati", cityId: 10429, enabled: true },
    { slug: "baran", cityId: 10587, enabled: true },
    { slug: "bardhaman", cityId: 10163, enabled: true },
    { slug: "bardoli", cityId: 10421, enabled: true },
    { slug: "bareilly", cityId: 53, enabled: true },
    { slug: "barh", cityId: 10676, enabled: true },
    { slug: "baripada", cityId: 10050, enabled: true },
    { slug: "barmer", cityId: 10406, enabled: true },
    { slug: "barnala", cityId: 10056, enabled: true },
    { slug: "barshi", cityId: 10121, enabled: true },
    { slug: "basirhat", cityId: 10251, enabled: true },
    { slug: "basti", cityId: 10099, enabled: true },
    { slug: "batala", cityId: 10054, enabled: true },
    { slug: "bathinda", cityId: 133, enabled: true },
    { slug: "beawar", cityId: 238, enabled: true },
    { slug: "beed", cityId: 235, enabled: true },
    { slug: "begusarai", cityId: 10295, enabled: true },
    { slug: "bela-pratapgarh", cityId: 10643, enabled: true },
    { slug: "belgaum", cityId: 103, enabled: true },
    { slug: "berhampore", cityId: 10243, enabled: true },
    { slug: "berhampur", cityId: 10382, enabled: true },
    { slug: "bettiah", cityId: 10283, enabled: true },
    { slug: "betul", cityId: 10432, enabled: true },
    { slug: "bhadohi", cityId: 10609, enabled: true },
    { slug: "bhadrachalam", cityId: 10356, enabled: true },
    { slug: "bhadrak", cityId: 10052, enabled: true },
    { slug: "bhadravati", cityId: 10094, enabled: true },
    { slug: "bhagalpur", cityId: 190, enabled: true },
    { slug: "bhandara", cityId: 10319, enabled: true },
    { slug: "bharabanki", cityId: 10361, enabled: true },
    { slug: "bharatpur", cityId: 10156, enabled: true },
    { slug: "bharuch", cityId: 10140, enabled: true },
    { slug: "bhatkal", cityId: 10306, enabled: true },
    { slug: "bhavnagar", cityId: 94, enabled: true },
    { slug: "bhawanipatna", cityId: 10586, enabled: true },
    { slug: "bhilai", cityId: 90, enabled: true },
    { slug: "bhilwara", cityId: 10149, enabled: true },
    { slug: "bhimavaram", cityId: 10126, enabled: true },
    { slug: "bhind", cityId: 10262, enabled: true },
    { slug: "bhiwadi", cityId: 10155, enabled: true },
    { slug: "bhiwani", cityId: 10041, enabled: true },
    { slug: "bhopal", cityId: 55, enabled: true },
    { slug: "bhubaneswar", cityId: 57, enabled: true },
    { slug: "bhuj", cityId: 10137, enabled: true },
    { slug: "bhusawal", cityId: 10192, enabled: true },
    { slug: "bidar", cityId: 221, enabled: true },
    { slug: "biharsharif", cityId: 10276, enabled: true },
    { slug: "bijapur", cityId: 10191, enabled: true },
    { slug: "bijnor", cityId: 10423, enabled: true },
    { slug: "bikaner", cityId: 59, enabled: true },
    { slug: "bilaspur", cityId: 89, enabled: true },
    { slug: "bilimora", cityId: 10575, enabled: true },
    { slug: "biswanath-chariali", cityId: 10665, enabled: true },
    { slug: "bodhan-rural", cityId: 10323, enabled: true },
    { slug: "bodinayakanur", cityId: 10585, enabled: true },
    { slug: "boisar", cityId: 10577, enabled: true },
    { slug: "bokaro", cityId: 100, enabled: true },
    { slug: "bolpur", cityId: 10551, enabled: true },
    { slug: "bongaigaon", cityId: 10538, enabled: true },
    { slug: "bongaon", cityId: 10176, enabled: true },
    { slug: "budaun", cityId: 10104, enabled: true },
    { slug: "budhwal", cityId: 10000, enabled: true },
    { slug: "bulandshahr", cityId: 10031, enabled: true },
    { slug: "buldana", cityId: 10349, enabled: true },
    { slug: "bundi", cityId: 10159, enabled: true },
    { slug: "burhanpur", cityId: 10093, enabled: true },
    { slug: "buxar", cityId: 10280, enabled: true },
    { slug: "central-goa", cityId: 63, enabled: true },
    { slug: "chaibasa", cityId: 10681, enabled: true },
    { slug: "chakdaha", cityId: 10649, enabled: true },
    { slug: "chalisgaon", cityId: 10315, enabled: true },
    { slug: "chandausi", cityId: 10260, enabled: true },
    { slug: "chandigarh", cityId: 11, enabled: true },
    { slug: "chandrapur", cityId: 10190, enabled: true },
    { slug: "chennai", cityId: 8, enabled: true },
    { slug: "chhapra", cityId: 160, enabled: true },
    { slug: "chhatarpur", cityId: 10433, enabled: true },
    { slug: "chhindwara", cityId: 207, enabled: true },
    { slug: "chidambaram", cityId: 10612, enabled: true },
    { slug: "chikhli", cityId: 10564, enabled: true },
    { slug: "chikkaballapur", cityId: 10305, enabled: true },
    { slug: "chikmagalur", cityId: 10259, enabled: true },
    { slug: "chiplun", cityId: 10529, enabled: true },
    { slug: "chitradurga", cityId: 10266, enabled: true },
    { slug: "chittoor", cityId: 10095, enabled: true },
    { slug: "chittorgarh", cityId: 10168, enabled: true },
    { slug: "churu", cityId: 10153, enabled: true },
    { slug: "coimbatore", cityId: 14, enabled: true },
    { slug: "cooch-behar", cityId: 10572, enabled: true },
    { slug: "cuddalore", cityId: 10042, enabled: true },
    { slug: "cuttack", cityId: 108, enabled: true },
    { slug: "dahanu", cityId: 10565, enabled: true },
    { slug: "dahod", cityId: 10404, enabled: true },
    { slug: "daltonganj", cityId: 10488, enabled: true },
    { slug: "daman", cityId: 10528, enabled: true },
    { slug: "darbhanga", cityId: 10026, enabled: true },
    { slug: "darjeeling", cityId: 10166, enabled: true },
    { slug: "dasuya", cityId: 10715, enabled: true },
    { slug: "dausa", cityId: 10374, enabled: true },
    { slug: "davanagere", cityId: 151, enabled: true },
    { slug: "dehradun", cityId: 22, enabled: true },
    { slug: "dehri", cityId: 10282, enabled: true },
    { slug: "delhi", cityId: 4, enabled: true },
    { slug: "deoghar", cityId: 219, enabled: true },
    { slug: "deoria-city", cityId: 10232, enabled: true },
    { slug: "dewas", cityId: 184, enabled: true },
    { slug: "dhanbad", cityId: 99, enabled: true },
    { slug: "dhar", cityId: 10313, enabled: true },
    { slug: "dharamshala", cityId: 161, enabled: true },
    { slug: "dharapuram", cityId: 10658, enabled: true },
    { slug: "dharmapuri", cityId: 10318, enabled: true },
    { slug: "dharwad", cityId: 171, enabled: true },
    { slug: "dholpur", cityId: 10170, enabled: true },
    { slug: "dhule", cityId: 170, enabled: true },
    { slug: "dibrugarh", cityId: 217, enabled: true },
    { slug: "digboi", cityId: 10664, enabled: true },
    { slug: "dimapur", cityId: 10079, enabled: true },
    { slug: "dindigul", cityId: 233, enabled: true },
    { slug: "diu", cityId: 10596, enabled: true },
    { slug: "doddaballapura", cityId: 10346, enabled: true },
    { slug: "duliajan", cityId: 10548, enabled: true },
    { slug: "dumka", cityId: 10582, enabled: true },
    { slug: "dungarpur", cityId: 10680, enabled: true },
    { slug: "durgapur", cityId: 10032, enabled: true },
    { slug: "eluru", cityId: 215, enabled: true },
    { slug: "erode", cityId: 119, enabled: true },
    { slug: "etah", cityId: 10242, enabled: true },
    { slug: "etawah", cityId: 202, enabled: true },
    { slug: "faizabad", cityId: 10215, enabled: true },
    { slug: "faridabad", cityId: 81, enabled: true },
    { slug: "faridkot", cityId: 10208, enabled: true },
    { slug: "farrukhabad", cityId: 228, enabled: true },
    { slug: "fatehabad", cityId: 10480, enabled: true },
    { slug: "fatehgarh-sahib", cityId: 10363, enabled: true },
    { slug: "fatehpur", cityId: 10132, enabled: true },
    { slug: "fazilka", cityId: 10484, enabled: true },
    { slug: "firozabad", cityId: 10185, enabled: true },
    { slug: "firozpur", cityId: 10055, enabled: true },
    { slug: "gadag-betigeri", cityId: 10269, enabled: true },
    { slug: "gadwal", cityId: 10322, enabled: true },
    { slug: "gandhidham", cityId: 10138, enabled: true },
    { slug: "gangapur-city", cityId: 10408, enabled: true },
    { slug: "gangarampur", cityId: 10655, enabled: true },
    { slug: "gangtok", cityId: 10569, enabled: true },
    { slug: "gauriganj", cityId: 10584, enabled: true },
    { slug: "gaya", cityId: 181, enabled: true },
    { slug: "ghazipur", cityId: 10076, enabled: true },
    { slug: "giridih", cityId: 10074, enabled: true },
    { slug: "godhra", cityId: 197, enabled: true },
    { slug: "gokak", cityId: 10307, enabled: true },
    { slug: "golaghat", cityId: 10539, enabled: true },
    { slug: "gonda", cityId: 10221, enabled: true },
    { slug: "gondia", cityId: 10003, enabled: true },
    { slug: "gopalganj", cityId: 10501, enabled: true },
    { slug: "gorakhpur", cityId: 117, enabled: true },
    { slug: "gudivada", cityId: 10247, enabled: true },
    { slug: "gudur", cityId: 10716, enabled: true },
    { slug: "guna", cityId: 10046, enabled: true },
    { slug: "guntakal", cityId: 10239, enabled: true },
    { slug: "guntur", cityId: 83, enabled: true },
    { slug: "gurdaspur", cityId: 10337, enabled: true },
    { slug: "gurgaon", cityId: 2, enabled: true },
    { slug: "gwalior", cityId: 65, enabled: true },
    { slug: "habra", cityId: 10183, enabled: true },
    { slug: "hajipur", cityId: 10287, enabled: true },
    { slug: "haldia", cityId: 10248, enabled: true },
    { slug: "haldwani", cityId: 225, enabled: true },
    { slug: "halol", cityId: 10422, enabled: true },
    { slug: "hamirpur", cityId: 10692, enabled: true },
    { slug: "hampi", cityId: 175, enabled: true },
    { slug: "hansi", cityId: 10497, enabled: true },
    { slug: "hanumangarh", cityId: 10128, enabled: true },
    { slug: "hapur", cityId: 192, enabled: true },
    { slug: "hardoi", cityId: 10098, enabled: true },
    { slug: "haridwar", cityId: 135, enabled: true },
    { slug: "hassan", cityId: 195, enabled: true },
    { slug: "hathras", cityId: 10203, enabled: true },
    { slug: "haveri", cityId: 10682, enabled: true },
    { slug: "himmatnagar", cityId: 10372, enabled: true },
    { slug: "hisar", cityId: 196, enabled: true },
    { slug: "hojai", cityId: 10713, enabled: true },
    { slug: "hoshangabad", cityId: 10270, enabled: true },
    { slug: "hoshiarpur", cityId: 10207, enabled: true },
    { slug: "hospet", cityId: 10103, enabled: true },
    { slug: "hosur", cityId: 10669, enabled: true },
    { slug: "hubli", cityId: 102, enabled: true },
    { slug: "hyderabad", cityId: 3, enabled: true },
    { slug: "ichalkaranji", cityId: 10004, enabled: true },
    { slug: "imphal", cityId: 10081, enabled: true },
    { slug: "indore", cityId: 18, enabled: true },
    { slug: "itanagar", cityId: 10566, enabled: true },
    { slug: "itarsi", cityId: 10310, enabled: true },
    { slug: "jabalpur", cityId: 104, enabled: true },
    { slug: "jagdalpur", cityId: 10077, enabled: true },
    { slug: "jagraon", cityId: 10481, enabled: true },
    { slug: "jagtial", cityId: 10044, enabled: true },
    { slug: "jahanabad", cityId: 10377, enabled: true },
    { slug: "jaipur", cityId: 12, enabled: true },
    { slug: "jalandhar", cityId: 47, enabled: true },
    { slug: "jalgaon", cityId: 188, enabled: true },
    { slug: "jalna", cityId: 10006, enabled: true },
    { slug: "jalpaiguri", cityId: 10167, enabled: true },
    { slug: "jammu", cityId: 95, enabled: true },
    { slug: "jamnagar", cityId: 10136, enabled: true },
    { slug: "jamshedpur", cityId: 98, enabled: true },
    { slug: "jamui", cityId: 10702, enabled: true },
    { slug: "jangipur", cityId: 10726, enabled: true },
    { slug: "jaunpur", cityId: 10271, enabled: true },
    { slug: "jhalawar", cityId: 10504, enabled: true },
    { slug: "jhansi", cityId: 115, enabled: true },
    { slug: "jhargram", cityId: 10605, enabled: true },
    { slug: "jharsuguda", cityId: 10502, enabled: true },
    { slug: "jhunjhunu", cityId: 10328, enabled: true },
    { slug: "jind", cityId: 10197, enabled: true },
    { slug: "jjajjar", cityId: 10689, enabled: true },
    { slug: "jodhpur", cityId: 112, enabled: true },
    { slug: "jorhat", cityId: 10274, enabled: true },
    { slug: "junagadh", cityId: 236, enabled: true },
    { slug: "kadapa", cityId: 148, enabled: true },
    { slug: "kadayanallur", cityId: 10627, enabled: true },
    { slug: "kadiri", cityId: 10472, enabled: true },
    { slug: "kaithal", cityId: 10043, enabled: true },
    { slug: "kakinada", cityId: 87, enabled: true },
    { slug: "kalaburagi", cityId: 180, enabled: true },
    { slug: "kamareddy", cityId: 10327, enabled: true },
    { slug: "kanchrapara", cityId: 10181, enabled: true },
    { slug: "kannauj", cityId: 10571, enabled: true },
    { slug: "kanpur", cityId: 39, enabled: true },
    { slug: "kanyakumari", cityId: 147, enabled: true },
    { slug: "kapurthala", cityId: 10335, enabled: true },
    { slug: "karad", cityId: 10350, enabled: true },
    { slug: "karaikal", cityId: 10687, enabled: true },
    { slug: "karaikkudi", cityId: 10100, enabled: true },
    { slug: "karimnagar", cityId: 10020, enabled: true },
    { slug: "karnal", cityId: 86, enabled: true },
    { slug: "karur", cityId: 10445, enabled: true },
    { slug: "karwar", cityId: 10448, enabled: true },
    { slug: "kashipur", cityId: 10091, enabled: true },
    { slug: "katihar", cityId: 10291, enabled: true },
    { slug: "katni", cityId: 212, enabled: true },
    { slug: "kavali", cityId: 10473, enabled: true },
    { slug: "kayamkulam", cityId: 10475, enabled: true },
    { slug: "kendrapada", cityId: 10520, enabled: true },
    { slug: "kendujhar", cityId: 10594, enabled: true },
    { slug: "khagaria", cityId: 10714, enabled: true },
    { slug: "khalilabad", cityId: 10650, enabled: true },
    { slug: "khamgaon", cityId: 10597, enabled: true },
    { slug: "khammam", cityId: 174, enabled: true },
    { slug: "khandwa", cityId: 213, enabled: true },
    { slug: "khanna", cityId: 220, enabled: true },
    { slug: "kharagpur", cityId: 68, enabled: true },
    { slug: "kishanganj", cityId: 10284, enabled: true },
    { slug: "kishangarh", cityId: 239, enabled: true },
    { slug: "kochi", cityId: 13, enabled: true },
    { slug: "kodaikanal", cityId: 10443, enabled: true },
    { slug: "kohima", cityId: 10578, enabled: true },
    { slug: "kokrajhar", cityId: 10690, enabled: true },
    { slug: "kolar", cityId: 198, enabled: true },
    { slug: "kolhapur", cityId: 105, enabled: true },
    { slug: "kolkata", cityId: 7, enabled: true },
    { slug: "kollam", cityId: 162, enabled: true },
    { slug: "koppal", cityId: 10563, enabled: true },
    { slug: "korba", cityId: 185, enabled: true },
    { slug: "kota", cityId: 48, enabled: true },
    { slug: "kotdwar", cityId: 10562, enabled: true },
    { slug: "kothagudem", cityId: 10496, enabled: true },
    { slug: "kottayam", cityId: 10025, enabled: true },
    { slug: "kovilpatti", cityId: 10591, enabled: true },
    { slug: "kozhikode", cityId: 61, enabled: true },
    { slug: "krishnagiri", cityId: 10353, enabled: true },
    { slug: "krishnanagar", cityId: 10235, enabled: true },
    { slug: "kullu", cityId: 169, enabled: true },
    { slug: "kumbakonam", cityId: 10047, enabled: true },
    { slug: "kurnool", cityId: 123, enabled: true },
    { slug: "kurukshetra", cityId: 10027, enabled: true },
    { slug: "kushalnagar", cityId: 10679, enabled: true },
    { slug: "lakhimpur", cityId: 10082, enabled: true },
    { slug: "lalitpur", cityId: 10102, enabled: true },
    { slug: "latur", cityId: 172, enabled: true },
    { slug: "lonavla", cityId: 10533, enabled: true },
    { slug: "lpu-phagwara", cityId: 10725, enabled: true },
    { slug: "lucknow", cityId: 15, enabled: true },
    { slug: "ludhiana", cityId: 35, enabled: true },
    { slug: "machilipatnam", cityId: 10023, enabled: true },
    { slug: "madanapalle", cityId: 10013, enabled: true },
    { slug: "madhubani", cityId: 10552, enabled: true },
    { slug: "madikeri", cityId: 223, enabled: true },
    { slug: "madurai", cityId: 49, enabled: true },
    { slug: "mahbubnagar", cityId: 10039, enabled: true },
    { slug: "mahoba", cityId: 10645, enabled: true },
    { slug: "mainpuri", cityId: 10069, enabled: true },
    { slug: "malappuram", cityId: 216, enabled: true },
    { slug: "malda", cityId: 10384, enabled: true },
    { slug: "malegaon", cityId: 231, enabled: true },
    { slug: "mallapuram-do-not-use", cityId: 10521, enabled: true },
    { slug: "malout", cityId: 10362, enabled: true },
    { slug: "manali", cityId: 10595, enabled: true },
    { slug: "mancherial", cityId: 10357, enabled: true },
    { slug: "mandapeta", cityId: 10701, enabled: true },
    { slug: "mandi-dabwali", cityId: 10479, enabled: true },
    { slug: "mandi-gobindgarh", cityId: 10410, enabled: true },
    { slug: "mandsaur", cityId: 10209, enabled: true },
    { slug: "mandya", cityId: 10263, enabled: true },
    { slug: "mangaluru", cityId: 78, enabled: true },
    { slug: "manipal", cityId: 51, enabled: true },
    { slug: "mansa", cityId: 10482, enabled: true },
    { slug: "markapur", cityId: 10302, enabled: true },
    { slug: "mathura", cityId: 134, enabled: true },
    { slug: "maunath-bhanjan", cityId: 10048, enabled: true },
    { slug: "mayiladuthurai", cityId: 10570, enabled: true },
    { slug: "medinipur", cityId: 10223, enabled: true },
    { slug: "meerut", cityId: 54, enabled: true },
    { slug: "mehsana", cityId: 168, enabled: true },
    { slug: "mettupalayam", cityId: 10662, enabled: true },
    { slug: "miryalaguda", cityId: 10240, enabled: true },
    { slug: "mirzapur", cityId: 10400, enabled: true },
    { slug: "modinagar", cityId: 10268, enabled: true },
    { slug: "moga", cityId: 10009, enabled: true },
    { slug: "moradabad", cityId: 10022, enabled: true },
    { slug: "morbi", cityId: 206, enabled: true },
    { slug: "morena", cityId: 193, enabled: true },
    { slug: "motihari", cityId: 10288, enabled: true },
    { slug: "mount-abu", cityId: 10157, enabled: true },
    { slug: "mughalsarai", cityId: 10222, enabled: true },
    { slug: "mukerian", cityId: 10668, enabled: true },
    { slug: "muktsar", cityId: 96, enabled: true },
    { slug: "mumbai", cityId: 5, enabled: true },
    { slug: "munger", cityId: 10290, enabled: true },
    { slug: "mussoorie", cityId: 187, enabled: true },
    { slug: "muzaffarnagar", cityId: 183, enabled: true },
    { slug: "muzaffarpur", cityId: 157, enabled: true },
    { slug: "mysore", cityId: 40, enabled: true },
    { slug: "nabadwip", cityId: 10173, enabled: true },
    { slug: "nabha", cityId: 10724, enabled: true },
    { slug: "nadiad", cityId: 204, enabled: true },
    { slug: "nagaon", cityId: 10058, enabled: true },
    { slug: "nagapattinam", cityId: 10257, enabled: true },
    { slug: "nagda", cityId: 10224, enabled: true },
    { slug: "nagercoil", cityId: 146, enabled: true },
    { slug: "nagpur", cityId: 16, enabled: true },
    { slug: "naharlagun", cityId: 10579, enabled: true },
    { slug: "nainital", cityId: 176, enabled: true },
    { slug: "nakodar", cityId: 10417, enabled: true },
    { slug: "nalbari", cityId: 10666, enabled: true },
    { slug: "nalgonda", cityId: 10188, enabled: true },
    { slug: "namakkal", cityId: 10317, enabled: true },
    { slug: "nanded", cityId: 153, enabled: true },
    { slug: "nandurbar", cityId: 10265, enabled: true },
    { slug: "nandyal", cityId: 10275, enabled: true },
    { slug: "nangal", cityId: 10366, enabled: true },
    { slug: "naraingarh", cityId: 10368, enabled: true },
    { slug: "narasaraopet", cityId: 10213, enabled: true },
    { slug: "narnaul", cityId: 10367, enabled: true },
    { slug: "narsinghpur", cityId: 10589, enabled: true },
    { slug: "nashik", cityId: 41, enabled: true },
    { slug: "navsari", cityId: 10141, enabled: true },
    { slug: "neemuch", cityId: 10105, enabled: true },
    { slug: "nellore", cityId: 120, enabled: true },
    { slug: "neyveli", cityId: 10296, enabled: true },
    { slug: "nirmal", cityId: 10399, enabled: true },
    { slug: "nizamabad", cityId: 149, enabled: true },
    { slug: "noida", cityId: 24, enabled: true },
    { slug: "noida-1", cityId: 10459, enabled: true },
    { slug: "north-lakhimpur", cityId: 10709, enabled: true },
    { slug: "ongole", cityId: 10024, enabled: true },
    { slug: "ooty", cityId: 56, enabled: true },
    { slug: "orai", cityId: 10051, enabled: true },
    { slug: "osmanabad", cityId: 10267, enabled: true },
    { slug: "palakkad", cityId: 10045, enabled: true },
    { slug: "palakollu", cityId: 10670, enabled: true },
    { slug: "palampur", cityId: 10561, enabled: true },
    { slug: "palani", cityId: 10574, enabled: true },
    { slug: "palanpur", cityId: 10146, enabled: true },
    { slug: "palghar", cityId: 10677, enabled: true },
    { slug: "pali", cityId: 10034, enabled: true },
    { slug: "palwal", cityId: 10199, enabled: true },
    { slug: "panipat", cityId: 97, enabled: true },
    { slug: "paradeep", cityId: 10699, enabled: true },
    { slug: "paramakudi", cityId: 10640, enabled: true },
    { slug: "parbhani", cityId: 10002, enabled: true },
    { slug: "parvathipuram", cityId: 10705, enabled: true },
    { slug: "pathankot", cityId: 10129, enabled: true },
    { slug: "patiala", cityId: 85, enabled: true },
    { slug: "patna", cityId: 79, enabled: true },
    { slug: "pattukkottai", cityId: 10651, enabled: true },
    { slug: "perambalur", cityId: 10639, enabled: true },
    { slug: "phagwara", cityId: 128, enabled: true },
    { slug: "piler", cityId: 10718, enabled: true },
    { slug: "pilibhit", cityId: 10106, enabled: true },
    { slug: "pilkhuwa", cityId: 10703, enabled: true },
    { slug: "pinjore-city", cityId: 10483, enabled: true },
    { slug: "pondicherry", cityId: 43, enabled: true },
    { slug: "porbandar", cityId: 203, enabled: true },
    { slug: "port-blair", cityId: 10273, enabled: true },
    { slug: "pratapgarh", cityId: 10616, enabled: true },
    { slug: "proddatur", cityId: 10256, enabled: true },
    { slug: "pudukkottai", cityId: 10096, enabled: true },
    { slug: "pune", cityId: 6, enabled: true },
    { slug: "puri", cityId: 10131, enabled: true },
    { slug: "purnea", cityId: 10380, enabled: true },
    { slug: "purulia", cityId: 10162, enabled: true },
    { slug: "pusad", cityId: 10593, enabled: true },
    { slug: "puttur", cityId: 10395, enabled: true },
    { slug: "rae-bareli", cityId: 10086, enabled: true },
    { slug: "raghunathpur", cityId: 10624, enabled: true },
    { slug: "raichur", cityId: 10193, enabled: true },
    { slug: "raiganj", cityId: 10231, enabled: true },
    { slug: "raigarh", cityId: 10057, enabled: true },
    { slug: "raipur", cityId: 58, enabled: true },
    { slug: "rajahmundry", cityId: 88, enabled: true },
    { slug: "rajampet", cityId: 10710, enabled: true },
    { slug: "rajapalayam", cityId: 10089, enabled: true },
    { slug: "rajgarh", cityId: 10615, enabled: true },
    { slug: "rajkot", cityId: 60, enabled: true },
    { slug: "rajnandgaon", cityId: 10090, enabled: true },
    { slug: "rajsamand", cityId: 10583, enabled: true },
    { slug: "ramagundam", cityId: 10038, enabled: true },
    { slug: "ramanagara", cityId: 10598, enabled: true },
    { slug: "ramanathapuram", cityId: 10440, enabled: true },
    { slug: "ramgarh", cityId: 10343, enabled: true },
    { slug: "rampur", cityId: 199, enabled: true },
    { slug: "ranaghat-wb", cityId: 10631, enabled: true },
    { slug: "ranchi", cityId: 80, enabled: true },
    { slug: "rangia", cityId: 10691, enabled: true },
    { slug: "rangpo", cityId: 10567, enabled: true },
    { slug: "ranibennur", cityId: 10092, enabled: true },
    { slug: "raniganj", cityId: 10164, enabled: true },
    { slug: "ratlam", cityId: 10021, enabled: true },
    { slug: "ratnagiri", cityId: 137, enabled: true },
    { slug: "ravulapalem", cityId: 10672, enabled: true },
    { slug: "rayachoty", cityId: 10396, enabled: true },
    { slug: "rayagada", cityId: 10698, enabled: true },
    { slug: "rewa", cityId: 154, enabled: true },
    { slug: "rewari", cityId: 10198, enabled: true },
    { slug: "rishikesh", cityId: 145, enabled: true },
    { slug: "roha", cityId: 10727, enabled: true },
    { slug: "rohtak", cityId: 166, enabled: true },
    { slug: "roorkee", cityId: 152, enabled: true },
    { slug: "ropar", cityId: 10365, enabled: true },
    { slug: "rourkela", cityId: 121, enabled: true },
    { slug: "rudrapur", cityId: 10083, enabled: true },
    { slug: "sagar", cityId: 205, enabled: true },
    { slug: "saharanpur", cityId: 131, enabled: true },
    { slug: "saharsa", cityId: 10285, enabled: true },
    { slug: "salem", cityId: 110, enabled: true },
    { slug: "samastipur", cityId: 10378, enabled: true },
    { slug: "sambalpur", cityId: 10204, enabled: true },
    { slug: "sangamner", cityId: 10428, enabled: true },
    { slug: "sangli", cityId: 143, enabled: true },
    { slug: "sangrur", cityId: 10336, enabled: true },
    { slug: "sankarankoil", cityId: 10720, enabled: true },
    { slug: "santipur", cityId: 10250, enabled: true },
    { slug: "sasaram", cityId: 10289, enabled: true },
    { slug: "satara", cityId: 10016, enabled: true },
    { slug: "satna", cityId: 155, enabled: true },
    { slug: "sawai-madhopur", cityId: 10160, enabled: true },
    { slug: "sehore", cityId: 10125, enabled: true },
    { slug: "shahjahanpur", cityId: 234, enabled: true },
    { slug: "shamli", cityId: 10234, enabled: true },
    { slug: "shikohabad", cityId: 10080, enabled: true },
    { slug: "shillong", cityId: 107, enabled: true },
    { slug: "shimla", cityId: 156, enabled: true },
    { slug: "shirdi-city", cityId: 10667, enabled: true },
    { slug: "shivamogga", cityId: 150, enabled: true },
    { slug: "shivpuri", cityId: 10008, enabled: true },
    { slug: "siddipet", cityId: 10321, enabled: true },
    { slug: "sikar", cityId: 10152, enabled: true },
    { slug: "silchar", cityId: 163, enabled: true },
    { slug: "siliguri", cityId: 10033, enabled: true },
    { slug: "silvassa", cityId: 10530, enabled: true },
    { slug: "sindhanur", cityId: 10453, enabled: true },
    { slug: "singrauli", cityId: 210, enabled: true },
    { slug: "sirkali", cityId: 10660, enabled: true },
    { slug: "sirsa", cityId: 64, enabled: true },
    { slug: "sirsi", cityId: 10441, enabled: true },
    { slug: "sitamarhi", cityId: 10647, enabled: true },
    { slug: "sitapur", cityId: 200, enabled: true },
    { slug: "sivakasi", cityId: 10438, enabled: true },
    { slug: "sivasagar", cityId: 10511, enabled: true },
    { slug: "siwan", cityId: 10281, enabled: true },
    { slug: "solan", cityId: 10487, enabled: true },
    { slug: "solapur", cityId: 106, enabled: true },
    { slug: "sonipat", cityId: 165, enabled: true },
    { slug: "sri-ganganagar", cityId: 10123, enabled: true },
    { slug: "srikakulam", cityId: 10294, enabled: true },
    { slug: "srinagar", cityId: 10040, enabled: true },
    { slug: "srivilliputhur", cityId: 10611, enabled: true },
    { slug: "sullurpeta", cityId: 10717, enabled: true },
    { slug: "sultanpur", cityId: 10233, enabled: true },
    { slug: "sulthan-bathery", cityId: 10695, enabled: true },
    { slug: "surat", cityId: 21, enabled: true },
    { slug: "suratgarh", cityId: 10150, enabled: true },
    { slug: "surendranagar-dudhrej", cityId: 10134, enabled: true },
    { slug: "suri", cityId: 10625, enabled: true },
    { slug: "suryapet", cityId: 10210, enabled: true },
    { slug: "tadepalligudem", cityId: 10037, enabled: true },
    { slug: "tadpatri", cityId: 10217, enabled: true },
    { slug: "tanuku", cityId: 10401, enabled: true },
    { slug: "tarn-taran-sahib", cityId: 10413, enabled: true },
    { slug: "tenkasi", cityId: 10610, enabled: true },
    { slug: "tezpur", cityId: 10474, enabled: true },
    { slug: "thanjavur", cityId: 118, enabled: true },
    { slug: "theni", cityId: 10444, enabled: true },
    { slug: "thiruvalla", cityId: 10468, enabled: true },
    { slug: "thiruvallur", cityId: 10316, enabled: true },
    { slug: "thiruvananthapuram", cityId: 74, enabled: true },
    { slug: "thiruvarur", cityId: 10629, enabled: true },
    { slug: "thoothukudi", cityId: 211, enabled: true },
    { slug: "thrissur", cityId: 66, enabled: true },
    { slug: "tindivanam", cityId: 10652, enabled: true },
    { slug: "tinsukia", cityId: 10088, enabled: true },
    { slug: "tiptur", cityId: 10354, enabled: true },
    { slug: "tirunelveli", cityId: 132, enabled: true },
    { slug: "tirupati", cityId: 69, enabled: true },
    { slug: "tirupattur", cityId: 10712, enabled: true },
    { slug: "tirupur", cityId: 71, enabled: true },
    { slug: "tiruttani", cityId: 10653, enabled: true },
    { slug: "tiruvannamalai", cityId: 10014, enabled: true },
    { slug: "tohana", cityId: 10503, enabled: true },
    { slug: "trichy", cityId: 37, enabled: true },
    { slug: "tumakuru", cityId: 208, enabled: true },
    { slug: "tuni", cityId: 10393, enabled: true },
    { slug: "udaipur", cityId: 42, enabled: true },
    { slug: "udgir", cityId: 10254, enabled: true },
    { slug: "udumalaipettai", cityId: 10711, enabled: true },
    { slug: "ujjain", cityId: 84, enabled: true },
    { slug: "uluberia", cityId: 10172, enabled: true },
    { slug: "una", cityId: 10693, enabled: true },
    { slug: "unnao", cityId: 10030, enabled: true },
    { slug: "vadodara", cityId: 17, enabled: true },
    { slug: "valsad", cityId: 158, enabled: true },
    { slug: "vapi", cityId: 159, enabled: true },
    { slug: "varanasi", cityId: 77, enabled: true },
    { slug: "vellore", cityId: 73, enabled: true },
    { slug: "veraval", cityId: 10523, enabled: true },
    { slug: "vidisha", cityId: 10078, enabled: true },
    { slug: "vijayawada", cityId: 38, enabled: true },
    { slug: "viluppuram", cityId: 10439, enabled: true },
    { slug: "virudhunagar", cityId: 10320, enabled: true },
    { slug: "vizag", cityId: 20, enabled: true },
    { slug: "vizianagaram", cityId: 173, enabled: true },
    { slug: "vyara", cityId: 10420, enabled: true },
    { slug: "waidhan", cityId: 10301, enabled: true },
    { slug: "warangal", cityId: 75, enabled: true },
    { slug: "wardha", cityId: 10124, enabled: true },
    { slug: "washim", cityId: 10619, enabled: true },
    { slug: "wayanad", cityId: 10637, enabled: true },
    { slug: "yamuna-nagar", cityId: 189, enabled: true },
    { slug: "yavatmal", cityId: 10007, enabled: true },
]
export default Cities;