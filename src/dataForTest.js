//initial data
var data_json = '{"nAxis": 2, "cells": {"cells": [[194, 883, 91, 215, 109], [584, 876, 275, 357, 21], [625, 43, 190, 256, 37], [527, 905, 110, 227, 233], [408, 688, 388, 483, 163], [92, 309, 304, 69, 161]]}, "axis": [{"Positions": [{"Members": [{"name": "France"}]}, {"Members": [{"name": "USA"}]}, {"Members": [{"name": "Japan"}]}, {"Members": [{"name": "England"}]}, {"Members": [{"name": "Italy"}]}], "n": 0}, {"Positions": [{"Members": [{"name": "Jan"}, {"name": "pnl"}]}, {"Members": [{"name": "Jan"}, {"name": "count"}]}, {"Members": [{"name": "Mar"}, {"name": "pnl"}]}, {"Members": [{"name": "Mar"}, {"name": "count"}]}, {"Members": [{"name": "Apr"}, {"name": "pnl"}]}, {"Members": [{"name": "Apr"}, {"name": "count"}]}], "n": 1}]}';
var data = eval('(' + data_json + ')');

//data Add Feb
var data_json2 = '{"nAxis": 2, "cells": {"cells": [[194, 883, 91, 215, 109], [584, 876, 275, 357, 21], [785, 865, 368, 978, 783], [449, 390, 859, 369, 762], [408, 688, 388, 483, 163], [92, 309, 304, 69, 161], [918, 505, 887, 551, 219], [215, 352, 94, 750, 715]]}, "axis": [{"Positions": [{"Members": [{"name": "France"}]}, {"Members": [{"name": "USA"}]}, {"Members": [{"name": "Japan"}]}, {"Members": [{"name": "England"}]}, {"Members": [{"name": "Italy"}]}], "n": 0}, {"Positions": [{"Members": [{"name": "Jan"}, {"name": "pnl"}]}, {"Members": [{"name": "Jan"}, {"name": "count"}]}, {"Members": [{"name": "Feb"}, {"name": "pnl"}]}, {"Members": [{"name": "Feb"}, {"name": "count"}]}, {"Members": [{"name": "Mar"}, {"name": "pnl"}]}, {"Members": [{"name": "Mar"}, {"name": "count"}]}, {"Members": [{"name": "Apr"}, {"name": "pnl"}]}, {"Members": [{"name": "Apr"}, {"name": "count"}]}], "n": 1}]}';
var data2 = eval('(' + data_json2 + ')');

//data 2 Update Cell
var data_json3 = '{"nAxis": 2, "cells": {"cells": [[194, 883, 91, 879, 340], [107, 876, 369, 772, 308], [625, 865, 368, 256, 37], [527, 905, 110, 227, 233], [805, 742, 211, 904, 163], [825, 309, 226, 884, 161], [777, 305, 453, 243, 469], [583, 668, 656, 74, 637]]}, "axis": [{"Positions": [{"Members": [{"name": "France"}]}, {"Members": [{"name": "USA"}]}, {"Members": [{"name": "Japan"}]}, {"Members": [{"name": "England"}]}, {"Members": [{"name": "Italy"}]}], "n": 0}, {"Positions": [{"Members": [{"name": "Jan"}, {"name": "pnl"}]}, {"Members": [{"name": "Jan"}, {"name": "count"}]}, {"Members": [{"name": "Feb"}, {"name": "pnl"}]}, {"Members": [{"name": "Feb"}, {"name": "count"}]}, {"Members": [{"name": "Mar"}, {"name": "pnl"}]}, {"Members": [{"name": "Mar"}, {"name": "count"}]}, {"Members": [{"name": "Apr"}, {"name": "pnl"}]}, {"Members": [{"name": "Apr"}, {"name": "count"}]}], "n": 1}]}';
var data3 = eval('(' + data_json3 + ')');

//data 3 Rem jap
var data_json4 = '{"nAxis": 2, "cells": {"cells": [[194, 883, 879, 340], [107, 876, 772, 308], [625, 865, 256, 37], [527, 905, 227, 233], [805, 742, 904, 163], [825, 309, 884, 161], [777, 305, 243, 469], [583, 668, 74, 637]]}, "axis": [{"Positions": [{"Members": [{"name": "France"}]}, {"Members": [{"name": "USA"}]}, {"Members": [{"name": "England"}]}, {"Members": [{"name": "Italy"}]}], "n": 0}, {"Positions": [{"Members": [{"name": "Jan"}, {"name": "pnl"}]}, {"Members": [{"name": "Jan"}, {"name": "count"}]}, {"Members": [{"name": "Feb"}, {"name": "pnl"}]}, {"Members": [{"name": "Feb"}, {"name": "count"}]}, {"Members": [{"name": "Mar"}, {"name": "pnl"}]}, {"Members": [{"name": "Mar"}, {"name": "count"}]}, {"Members": [{"name": "Apr"}, {"name": "pnl"}]}, {"Members": [{"name": "Apr"}, {"name": "count"}]}], "n": 1}]}';
var data4 = eval('(' + data_json4 + ')');

//data 4 Reb Feb/Add Jap
var data_json5 = '{"nAxis": 2, "cells": {"cells": [[527, 113, 828, 981, 349], [375, 686, 34, 166, 563], [522, 272, 631, 408, 407], [296, 534, 546, 792, 869], [570, 803, 729, 687, 466], [812, 985, 657, 599, 334], [878, 823, 318, 510, 895], [8, 430, 809, 421, 766]]}, "axis": [{"Positions": [{"Members": [{"name": "France"}]}, {"Members": [{"name": "USA"}]}, {"Members": [{"name": "Japan"}]}, {"Members": [{"name": "England"}]}, {"Members": [{"name": "Italy"}]}], "n": 0}, {"Positions": [{"Members": [{"name": "Jan"}, {"name": "pnl"}]}, {"Members": [{"name": "Jan"}, {"name": "count"}]}, {"Members": [{"name": "Mar"}, {"name": "pnl"}]}, {"Members": [{"name": "Mar"}, {"name": "count"}]}, {"Members": [{"name": "Apr"}, {"name": "pnl"}]}, {"Members": [{"name": "Apr"}, {"name": "count"}]}], "n": 1}]}';
var data5 = eval('(' + data_json5 + ')');

//data 5 more complex DoubleCJ
var data_json6 = '{"nAxis": 2, "cells": {"cells": [[812, 209, 741, 562, 379, 874, 370, 556, 131, 461, 878, 675, 775, 269, 40, 824], [212, 880, 281, 567, 980, 343, 518, 674, 128, 23, 21, 638, 440, 408, 854, 450], [770, 46, 500, 927, 361, 993, 819, 113, 745, 81, 380, 153, 793, 136, 998, 19], [917, 437, 41, 793, 830, 22, 633, 179, 461, 347, 654, 54, 672, 306, 627, 881], [1, 814, 335, 472, 325, 127, 835, 360, 878, 656, 741, 399, 996, 809, 865, 577], [863, 385, 435, 535, 223, 518, 227, 592, 707, 803, 916, 665, 659, 881, 74, 735], [765, 996, 634, 712, 40, 751, 672, 45, 195, 63, 682, 191, 490, 670, 15, 14], [622, 822, 665, 462, 45, 822, 392, 4, 776, 505, 660, 919, 766, 53, 969, 423]]}, "axis": [{"Positions": [{"Members": [{"name": "France"}, {"name": "A1"}, {"name": "B1"}]}, {"Members": [{"name": "France"}, {"name": "A1"}, {"name": "B2"}]}, {"Members": [{"name": "France"}, {"name": "A2"}, {"name": "B1"}]}, {"Members": [{"name": "France"}, {"name": "A2"}, {"name": "B2"}]}, {"Members": [{"name": "France"}, {"name": "A3"}, {"name": "B1"}]}, {"Members": [{"name": "France"}, {"name": "A3"}, {"name": "B2"}]}, {"Members": [{"name": "France"}, {"name": "A4"}, {"name": "B1"}]}, {"Members": [{"name": "France"}, {"name": "A4"}, {"name": "B2"}]}, {"Members": [{"name": "USA"}, {"name": "A1"}, {"name": "B1"}]}, {"Members": [{"name": "USA"}, {"name": "A1"}, {"name": "B2"}]}, {"Members": [{"name": "USA"}, {"name": "A2"}, {"name": "B1"}]}, {"Members": [{"name": "USA"}, {"name": "A2"}, {"name": "B2"}]}, {"Members": [{"name": "USA"}, {"name": "A3"}, {"name": "B1"}]}, {"Members": [{"name": "USA"}, {"name": "A3"}, {"name": "B2"}]}, {"Members": [{"name": "USA"}, {"name": "A4"}, {"name": "B1"}]}, {"Members": [{"name": "USA"}, {"name": "A4"}, {"name": "B2"}]}], "n": 0}, {"Positions": [{"Members": [{"name": "Jan"}, {"name": "pnl"}]}, {"Members": [{"name": "Jan"}, {"name": "count"}]}, {"Members": [{"name": "Feb"}, {"name": "pnl"}]}, {"Members": [{"name": "Feb"}, {"name": "count"}]}, {"Members": [{"name": "Mar"}, {"name": "pnl"}]}, {"Members": [{"name": "Mar"}, {"name": "count"}]}, {"Members": [{"name": "Apr"}, {"name": "pnl"}]}, {"Members": [{"name": "Apr"}, {"name": "count"}]}], "n": 1}]}';
var data6 = eval('(' + data_json6 + ')');

//data 6 more more complex DoubleCJ2
var data_json7 = '{"nAxis": 2, "cells": {"cells": [[415, 108, 654, 939, 755, 982, 851, 751, 818, 850, 921, 529, 911, 393, 903, 2, 803, 799, 427, 484, 715, 90, 970, 264, 457, 796, 745, 560, 216, 190, 606, 958], [159, 831, 725, 886, 367, 192, 268, 526, 25, 3, 796, 327, 786, 823, 927, 550, 106, 594, 3, 457, 598, 850, 585, 25, 608, 757, 886, 854, 228, 22, 228, 716], [529, 326, 928, 179, 692, 801, 489, 51, 937, 775, 445, 253, 475, 299, 1000, 701, 620, 738, 941, 551, 899, 870, 268, 505, 465, 803, 94, 26, 38, 206, 962, 578], [724, 235, 562, 696, 615, 915, 790, 795, 888, 840, 435, 396, 573, 694, 565, 980, 981, 564, 555, 824, 40, 623, 369, 603, 132, 180, 812, 745, 156, 533, 891, 36], [662, 350, 132, 374, 682, 300, 513, 336, 655, 605, 341, 347, 132, 417, 693, 792, 686, 525, 752, 990, 959, 503, 771, 326, 736, 545, 873, 970, 197, 360, 590, 603], [401, 939, 496, 230, 110, 158, 725, 712, 254, 656, 458, 668, 752, 142, 905, 742, 567, 708, 13, 474, 354, 387, 34, 108, 42, 137, 180, 508, 840, 547, 503, 256], [912, 365, 103, 658, 590, 559, 900, 10, 920, 903, 955, 20, 525, 631, 279, 129, 732, 582, 819, 994, 12, 678, 3, 955, 82, 210, 166, 967, 592, 965, 190, 133], [495, 506, 88, 494, 509, 739, 161, 162, 150, 62, 234, 641, 118, 548, 504, 202, 714, 135, 601, 796, 62, 728, 278, 171, 810, 526, 789, 350, 512, 904, 336, 747], [694, 200, 35, 72, 777, 998, 122, 99, 177, 23, 101, 339, 22, 288, 575, 610, 504, 613, 228, 548, 147, 430, 282, 295, 951, 593, 29, 838, 205, 293, 158, 968], [950, 12, 79, 95, 338, 285, 55, 785, 655, 859, 107, 823, 594, 460, 897, 638, 142, 568, 399, 974, 806, 735, 42, 104, 42, 842, 664, 671, 961, 440, 348, 383], [337, 133, 533, 564, 335, 854, 290, 608, 603, 333, 67, 957, 794, 864, 409, 608, 950, 361, 580, 963, 323, 641, 1000, 742, 875, 559, 356, 235, 985, 370, 658, 16], [542, 701, 635, 924, 616, 671, 610, 74, 753, 942, 715, 494, 3, 533, 997, 493, 9, 907, 376, 128, 314, 783, 131, 718, 451, 343, 659, 852, 290, 478, 20, 341], [521, 322, 690, 810, 405, 356, 103, 863, 510, 328, 58, 845, 552, 454, 559, 30, 953, 77, 739, 524, 854, 866, 801, 779, 830, 630, 204, 985, 460, 205, 652, 556], [234, 707, 669, 165, 722, 552, 388, 321, 916, 669, 809, 391, 788, 279, 803, 480, 391, 624, 955, 747, 128, 64, 297, 402, 782, 537, 745, 342, 87, 575, 101, 955], [36, 485, 416, 219, 73, 371, 44, 379, 936, 610, 390, 898, 342, 770, 588, 454, 561, 494, 500, 426, 966, 468, 416, 525, 60, 928, 692, 887, 242, 923, 792, 609], [2, 654, 348, 947, 366, 338, 689, 297, 591, 824, 581, 125, 912, 276, 404, 437, 821, 304, 291, 804, 304, 298, 690, 528, 981, 162, 49, 14, 379, 964, 893, 281], [588, 159, 873, 340, 616, 848, 15, 9, 845, 939, 579, 432, 398, 484, 528, 967, 915, 255, 517, 716, 570, 720, 413, 511, 560, 988, 50, 503, 952, 362, 770, 480], [758, 778, 550, 749, 877, 118, 339, 632, 880, 573, 503, 262, 859, 674, 911, 740, 371, 687, 126, 214, 573, 967, 859, 584, 978, 399, 73, 36, 440, 282, 246, 793], [140, 848, 228, 802, 491, 105, 901, 341, 191, 109, 579, 286, 393, 75, 244, 784, 699, 920, 462, 615, 651, 658, 868, 169, 783, 594, 768, 380, 225, 860, 367, 645], [628, 378, 362, 582, 902, 906, 120, 911, 236, 505, 714, 365, 314, 651, 664, 759, 677, 349, 514, 599, 84, 991, 364, 167, 563, 821, 591, 360, 260, 710, 40, 177], [238, 988, 965, 884, 562, 798, 270, 596, 450, 871, 177, 787, 148, 860, 10, 205, 385, 934, 296, 916, 933, 16, 485, 965, 262, 984, 792, 798, 772, 1, 643, 836], [880, 6, 974, 133, 809, 693, 232, 807, 882, 88, 314, 793, 356, 819, 750, 465, 861, 654, 751, 963, 624, 576, 25, 606, 831, 311, 959, 13, 706, 163, 587, 298], [560, 91, 515, 703, 774, 788, 334, 233, 501, 936, 104, 437, 919, 376, 689, 281, 773, 963, 424, 799, 621, 886, 685, 179, 374, 587, 336, 952, 298, 589, 184, 174], [912, 967, 448, 260, 614, 449, 481, 238, 260, 79, 469, 621, 734, 225, 274, 422, 14, 100, 328, 632, 258, 917, 406, 73, 673, 287, 967, 340, 635, 361, 598, 368]]}, "axis": [{"Positions": [{"Members": [{"name": "France"}, {"name": "A1"}, {"name": "B1"}]}, {"Members": [{"name": "France"}, {"name": "A1"}, {"name": "B2"}]}, {"Members": [{"name": "France"}, {"name": "A2"}, {"name": "B1"}]}, {"Members": [{"name": "France"}, {"name": "A2"}, {"name": "B2"}]}, {"Members": [{"name": "France"}, {"name": "A3"}, {"name": "B1"}]}, {"Members": [{"name": "France"}, {"name": "A3"}, {"name": "B2"}]}, {"Members": [{"name": "France"}, {"name": "A4"}, {"name": "B1"}]}, {"Members": [{"name": "France"}, {"name": "A4"}, {"name": "B2"}]}, {"Members": [{"name": "USA"}, {"name": "A1"}, {"name": "B1"}]}, {"Members": [{"name": "USA"}, {"name": "A1"}, {"name": "B2"}]}, {"Members": [{"name": "USA"}, {"name": "A2"}, {"name": "B1"}]}, {"Members": [{"name": "USA"}, {"name": "A2"}, {"name": "B2"}]}, {"Members": [{"name": "USA"}, {"name": "A3"}, {"name": "B1"}]}, {"Members": [{"name": "USA"}, {"name": "A3"}, {"name": "B2"}]}, {"Members": [{"name": "USA"}, {"name": "A4"}, {"name": "B1"}]}, {"Members": [{"name": "USA"}, {"name": "A4"}, {"name": "B2"}]}, {"Members": [{"name": "Japan"}, {"name": "A1"}, {"name": "B1"}]}, {"Members": [{"name": "Japan"}, {"name": "A1"}, {"name": "B2"}]}, {"Members": [{"name": "Japan"}, {"name": "A2"}, {"name": "B1"}]}, {"Members": [{"name": "Japan"}, {"name": "A2"}, {"name": "B2"}]}, {"Members": [{"name": "Japan"}, {"name": "A3"}, {"name": "B1"}]}, {"Members": [{"name": "Japan"}, {"name": "A3"}, {"name": "B2"}]}, {"Members": [{"name": "Japan"}, {"name": "A4"}, {"name": "B1"}]}, {"Members": [{"name": "Japan"}, {"name": "A4"}, {"name": "B2"}]}, {"Members": [{"name": "England"}, {"name": "A1"}, {"name": "B1"}]}, {"Members": [{"name": "England"}, {"name": "A1"}, {"name": "B2"}]}, {"Members": [{"name": "England"}, {"name": "A2"}, {"name": "B1"}]}, {"Members": [{"name": "England"}, {"name": "A2"}, {"name": "B2"}]}, {"Members": [{"name": "England"}, {"name": "A3"}, {"name": "B1"}]}, {"Members": [{"name": "England"}, {"name": "A3"}, {"name": "B2"}]}, {"Members": [{"name": "England"}, {"name": "A4"}, {"name": "B1"}]}, {"Members": [{"name": "England"}, {"name": "A4"}, {"name": "B2"}]}], "n": 0}, {"Positions": [{"Members": [{"name": "Jan"}, {"name": "pnl"}]}, {"Members": [{"name": "Jan"}, {"name": "count"}]}, {"Members": [{"name": "Feb"}, {"name": "pnl"}]}, {"Members": [{"name": "Feb"}, {"name": "count"}]}, {"Members": [{"name": "Mar"}, {"name": "pnl"}]}, {"Members": [{"name": "Mar"}, {"name": "count"}]}, {"Members": [{"name": "Apr"}, {"name": "pnl"}]}, {"Members": [{"name": "Apr"}, {"name": "count"}]}, {"Members": [{"name": "May"}, {"name": "pnl"}]}, {"Members": [{"name": "May"}, {"name": "count"}]}, {"Members": [{"name": "Jun"}, {"name": "pnl"}]}, {"Members": [{"name": "Jun"}, {"name": "count"}]}, {"Members": [{"name": "Jul"}, {"name": "pnl"}]}, {"Members": [{"name": "Jul"}, {"name": "count"}]}, {"Members": [{"name": "Aug"}, {"name": "pnl"}]}, {"Members": [{"name": "Aug"}, {"name": "count"}]}, {"Members": [{"name": "Sept"}, {"name": "pnl"}]}, {"Members": [{"name": "Sept"}, {"name": "count"}]}, {"Members": [{"name": "Oct"}, {"name": "pnl"}]}, {"Members": [{"name": "Oct"}, {"name": "count"}]}, {"Members": [{"name": "Nov"}, {"name": "pnl"}]}, {"Members": [{"name": "Nov"}, {"name": "count"}]}, {"Members": [{"name": "Dec"}, {"name": "pnl"}]}, {"Members": [{"name": "Dec"}, {"name": "count"}]}], "n": 1}]}';
var data7 = eval('(' + data_json7 + ')');

//data 7 more more complex - 2 countries / Rem USA Jap
var data_json8 = '{"nAxis": 2, "cells": {"cells": [[962, 1, 556, 309, 267, 150, 705, 701, 968, 390, 976, 810, 186, 35, 152, 395], [211, 253, 163, 209, 237, 686, 350, 218, 33, 271, 586, 869, 45, 742, 854, 750], [935, 497, 146, 606, 286, 240, 14, 104, 597, 1000, 64, 773, 225, 907, 312, 242], [521, 109, 124, 782, 336, 406, 665, 594, 129, 656, 399, 978, 44, 123, 480, 800], [899, 709, 495, 669, 844, 106, 627, 455, 92, 38, 21, 605, 359, 164, 588, 726], [138, 188, 134, 326, 332, 198, 607, 600, 273, 153, 997, 893, 514, 711, 930, 779], [720, 647, 548, 4, 244, 43, 424, 892, 703, 744, 593, 224, 628, 363, 167, 190], [357, 361, 487, 48, 627, 850, 255, 488, 861, 863, 959, 440, 624, 816, 284, 126], [429, 851, 37, 218, 360, 179, 855, 88, 844, 514, 268, 563, 610, 163, 246, 273], [78, 924, 40, 615, 646, 133, 265, 932, 7, 735, 477, 364, 299, 447, 998, 774], [957, 427, 738, 578, 680, 321, 769, 348, 220, 749, 332, 632, 878, 315, 466, 319], [282, 655, 457, 678, 902, 237, 723, 962, 798, 844, 382, 420, 858, 402, 232, 326], [213, 172, 175, 101, 368, 627, 369, 394, 737, 957, 373, 182, 310, 641, 465, 225], [401, 617, 617, 333, 176, 947, 321, 889, 183, 206, 429, 635, 747, 491, 172, 626], [403, 569, 895, 442, 231, 336, 39, 504, 118, 379, 337, 354, 77, 404, 597, 415], [879, 356, 203, 46, 534, 170, 147, 39, 838, 713, 938, 551, 811, 246, 658, 971], [87, 535, 708, 746, 927, 826, 490, 723, 107, 523, 312, 112, 483, 616, 659, 638], [644, 161, 907, 769, 271, 948, 668, 456, 233, 813, 668, 879, 36, 883, 856, 349], [79, 627, 780, 936, 378, 496, 256, 14, 84, 492, 938, 403, 247, 587, 104, 13], [570, 793, 279, 968, 860, 457, 457, 583, 857, 21, 156, 611, 830, 246, 749, 390], [608, 661, 182, 821, 614, 694, 617, 949, 354, 30, 853, 626, 435, 642, 388, 870], [771, 214, 197, 288, 810, 955, 57, 714, 698, 766, 677, 224, 147, 717, 547, 953], [320, 972, 613, 481, 565, 475, 699, 561, 483, 236, 821, 324, 855, 739, 917, 683], [589, 425, 398, 843, 268, 94, 977, 206, 794, 732, 94, 996, 519, 794, 661, 313]]}, "axis": [{"Positions": [{"Members": [{"name": "France"}, {"name": "A1"}, {"name": "B1"}]}, {"Members": [{"name": "France"}, {"name": "A1"}, {"name": "B2"}]}, {"Members": [{"name": "France"}, {"name": "A2"}, {"name": "B1"}]}, {"Members": [{"name": "France"}, {"name": "A2"}, {"name": "B2"}]}, {"Members": [{"name": "France"}, {"name": "A3"}, {"name": "B1"}]}, {"Members": [{"name": "France"}, {"name": "A3"}, {"name": "B2"}]}, {"Members": [{"name": "France"}, {"name": "A4"}, {"name": "B1"}]}, {"Members": [{"name": "France"}, {"name": "A4"}, {"name": "B2"}]}, {"Members": [{"name": "England"}, {"name": "A1"}, {"name": "B1"}]}, {"Members": [{"name": "England"}, {"name": "A1"}, {"name": "B2"}]}, {"Members": [{"name": "England"}, {"name": "A2"}, {"name": "B1"}]}, {"Members": [{"name": "England"}, {"name": "A2"}, {"name": "B2"}]}, {"Members": [{"name": "England"}, {"name": "A3"}, {"name": "B1"}]}, {"Members": [{"name": "England"}, {"name": "A3"}, {"name": "B2"}]}, {"Members": [{"name": "England"}, {"name": "A4"}, {"name": "B1"}]}, {"Members": [{"name": "England"}, {"name": "A4"}, {"name": "B2"}]}], "n": 0}, {"Positions": [{"Members": [{"name": "Jan"}, {"name": "pnl"}]}, {"Members": [{"name": "Jan"}, {"name": "count"}]}, {"Members": [{"name": "Feb"}, {"name": "pnl"}]}, {"Members": [{"name": "Feb"}, {"name": "count"}]}, {"Members": [{"name": "Mar"}, {"name": "pnl"}]}, {"Members": [{"name": "Mar"}, {"name": "count"}]}, {"Members": [{"name": "Apr"}, {"name": "pnl"}]}, {"Members": [{"name": "Apr"}, {"name": "count"}]}, {"Members": [{"name": "May"}, {"name": "pnl"}]}, {"Members": [{"name": "May"}, {"name": "count"}]}, {"Members": [{"name": "Jun"}, {"name": "pnl"}]}, {"Members": [{"name": "Jun"}, {"name": "count"}]}, {"Members": [{"name": "Jul"}, {"name": "pnl"}]}, {"Members": [{"name": "Jul"}, {"name": "count"}]}, {"Members": [{"name": "Aug"}, {"name": "pnl"}]}, {"Members": [{"name": "Aug"}, {"name": "count"}]}, {"Members": [{"name": "Sept"}, {"name": "pnl"}]}, {"Members": [{"name": "Sept"}, {"name": "count"}]}, {"Members": [{"name": "Oct"}, {"name": "pnl"}]}, {"Members": [{"name": "Oct"}, {"name": "count"}]}, {"Members": [{"name": "Nov"}, {"name": "pnl"}]}, {"Members": [{"name": "Nov"}, {"name": "count"}]}, {"Members": [{"name": "Dec"}, {"name": "pnl"}]}, {"Members": [{"name": "Dec"}, {"name": "count"}]}], "n": 1}]}';
var data8 = eval('(' + data_json8 + ')');

//data 8 drilldown usa
var data_json9 ='{"nAxis": 2, "cells": {"cells": [[2, 10, 2, 5, 5, 4, 0, 8, 9], [10, 8, 8, 5, 3, 0, 3, 3, 0], [9, 4, 9, 5, 4, 5, 2, 9, 3], [7, 9, 8, 6, 3, 10, 3, 3, 10], [9, 8, 7, 3, 1, 8, 2, 7, 8], [8, 6, 4, 0, 9, 7, 7, 0, 9], [4, 5, 3, 8, 4, 8, 9, 2, 2], [2, 5, 0, 0, 9, 6, 5, 0, 7]]}, "axis": [{"Positions": [{"Members": [{"name": "France"}, {"name": "France"}]}, {"Members": [{"name": "USA"}, {"name": "New York"}]}, {"Members": [{"name": "USA"}, {"name": "Chicago"}]}, {"Members": [{"name": "USA"}, {"name": "Los Angeles"}]}, {"Members": [{"name": "USA"}, {"name": "San Francisco"}]}, {"Members": [{"name": "USA"}, {"name": "Miami"}]}, {"Members": [{"name": "Japan"}, {"name": "Japan"}]}, {"Members": [{"name": "England"}, {"name": "England"}]}, {"Members": [{"name": "Italy"}, {"name": "Italy"}]}], "n": 0}, {"Positions": [{"Members": [{"name": "Jan"}, {"name": "pnl"}]}, {"Members": [{"name": "Jan"}, {"name": "count"}]}, {"Members": [{"name": "Feb"}, {"name": "pnl"}]}, {"Members": [{"name": "Feb"}, {"name": "count"}]}, {"Members": [{"name": "Mar"}, {"name": "pnl"}]}, {"Members": [{"name": "Mar"}, {"name": "count"}]}, {"Members": [{"name": "Apr"}, {"name": "pnl"}]}, {"Members": [{"name": "Apr"}, {"name": "count"}]}], "n": 1}]}';
var data9 = eval('(' + data_json9 + ')');

//data from AP desk
var data_json10='{"axes":[{"index":1,"hierarchies":[{"dimension":"Bookings","name":"Desk","ordinal":4}],"positions":[{"members":[{"displayName":"AllMember","levelName":"ALL","path":{"path":["AllMember"]},"displayInfo":65538,"properties":null}]},{"members":[{"displayName":"DeskA","levelName":"Desk","path":{"path":["AllMember","DeskA"]},"displayInfo":10,"properties":null}]},{"members":[{"displayName":"DeskB","levelName":"Desk","path":{"path":["AllMember","DeskB"]},"displayInfo":131082,"properties":null}]}],"memberProperties":null}],"slicerAxis":null,"cells":[{"ordinal":1,"value":530,"formattedValue":"530","previousValue":null,"properties":null},{"ordinal":2,"value":470,"formattedValue":"470","previousValue":null,"properties":null},{"ordinal":0,"value":1000,"formattedValue":"1000","previousValue":null,"properties":null}],"cellProperties":null}';
var data10 = eval('(' + data_json10 + ')');

