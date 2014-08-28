/*
  从2014年7月开始恢复股票池的发布。
*/

var historyArr = new Array (
  ["2014-07-31", "002364", "中恒电气", "18.43", "21.35", "21.51", "16.71", "电力设备", "2014-08-22", "23"],
  ["2014-08-12", "300298", "三诺生物", "36.21", "38.92", "38.92", "9.50",  "医药生物", "2014-08-21", "10"],
  ["2014-07-30", "002071", "长城影视", "19.81", "20.96", "21.53", "8.68",  "造纸印刷", "2014-08-18", "20"],
  ["2014-07-14", "600426", "华鲁恒升", "7.58",  "8.50",  "8.75",  "15.44", "化工",     "2014-08-15", "33"],
  ["2014-07-10", "002318", "久立特材", "17.63", "20.00", "20.32", "15.26", "钢铁行业", "2014-08-12", "34"],
  ["2014-07-18", "002638", "勤上光电", "14.77", "16.54", "16.94", "14.69", "元器件",   "2014-08-06", "21"],
  ["2014-07-25", "300289", "利德曼",   "26.09", "28.00", "28.07", "7.59",  "医药生物", "2014-08-05", "12"],
  ["2014-07-31", "002714", "牧原股份", "47.55", "51.03", "52.53", "10.47", "农林牧渔", "2014-08-05", "6" ],
  ["2014-07-07", "002589", "瑞康医药", "27.06", "30.45", "33.45", "23.61", "医药生物", "2014-08-04", "29"],
  ["2014-07-21", "000001", "平安银行", "9.60",  "10.50", "10.78", "12.29", "银行业",   "2014-07-28", "8" ],
  ["2014-07-04", "300224", "正海磁材", "22.70", "25.00", "25.35", "11.67", "有色金属", "2014-07-10", "7" ]
);

var indexArr = new Array("0000001","1399001","1399006","1399300");

var hqArr = new Array(
  ["1002397", "纺织服装", "2014-08-28", "9.17",   "8.29",   "增持"],
  ["0600998", "医药生物", "2014-08-28", "16.20",  "18.50",  "增持"],
  ["0600518", "医药生物", "2014-08-28", "14.47",  "20.80",  "买入"],
  ["1002458", "农林牧渔", "2014-08-28", "12.48",  "15.40",  "买入"],
  ["1002154", "纺织服装", "2014-08-28", "7.35",   "6.88",   "增持"],
  ["0601009", "银行业",   "2014-08-28", "8.15",   "9.00",   "增持"],
  ["1002104", "电子行业", "2014-08-27", "12.98",  "17.20",  "买入"],
  ["0600199", "食品饮料", "2014-08-27", "8.68",   "11.50",  "买入"],
  ["1000882", "房地产",   "2014-08-27", "3.30",   "4.68",   "买入"],
  ["0600486", "化工",     "2014-08-27", "22.76",  "27.00",  "增持"],
  ["0600196", "医药生物", "2014-08-27", "18.79",  "27.75",  "买入"],
  ["1002563", "纺织服装", "2014-08-27", "29.69",  "37.26",  "买入"],
  ["1002603", "医药生物", "2014-08-27", "31.47",  "33.95",  "增持"],
  ["1002318", "钢铁行业", "2014-08-27", "20.19",  "22.40",  "买入"],
  ["1002207", "石油化工", "2014-08-27", "14.56",  "20.00",  "买入"],
  ["1002329", "食品饮料", "2014-08-27", "17.30",  "19.60",  "买入"],
  ["1002311", "农林牧渔", "2014-08-27", "11.51",  "13.25",  "买入"],
  ["0600535", "医药生物", "2014-08-27", "38.05",  "50.10",  "买入"],
  ["1002007", "医药生物", "2014-08-27", "26.67",  "30.52",  "买入"],
  ["0600309", "化工",     "2014-08-27", "16.08",  "24.50",  "买入"],
  ["0600519", "食品饮料", "2014-08-27", "157.72", "212.00", "买入"],
  ["1300326", "制造业",   "2014-08-27", "31.22",  "36.75",  "买入"],
  ["1000893", "农林牧渔", "2014-08-27", "11.70",  "13.00",  "增持"],
  ["1300147", "医药生物", "2014-08-27", "20.07",  "25.60",  "增持"],
  ["0600401", "造纸印刷", "2014-08-27", "9.79",   "11.00",  "增持"],
  ["1002385", "农林牧渔", "2014-08-27", "13.69",  "15.90",  "买入"],
  ["1002269", "纺织服装", "2014-08-26", "9.35",   "11.40",  "增持"],
  ["1002020", "医药生物", "2014-08-26", "17.58",  "19.95",  "增持"],
  ["0600085", "医药生物", "2014-08-26", "18.80",  "21.30",  "增持"],
  ["0600096", "化工",     "2014-08-26", "9.09",   "9.50",   "增持"],
  ["1002594", "汽车",     "2014-08-25", "49.98",  "60.00",  "买入"],
  ["1002142", "银行业",   "2014-08-25", "9.70",   "10.06",  "买入"],
  ["0601633", "汽车",     "2014-08-25", "31.05",  "38.00",  "买入"],
  ["1002029", "纺织服装", "2014-08-25", "9.28",   "10.00",  "增持"],
  ["1300315", "软件服务", "2014-08-25", "15.83",  "20.00",  "买入"],
  ["1002042", "纺织服装", "2014-08-25", "4.37",   "5.10",   "增持"],
  ["1002293", "纺织服装", "2014-08-25", "21.67",  "25.84",  "买入"],
  ["0600801", "建材",     "2014-08-25", "7.54",   "10.30",  "买入"],
  ["1300170", "计算机",   "2014-08-25", "13.52",  "16.00",  "买入"],
  ["0600585", "建材",     "2014-08-25", "17.59",  "23.80",  "买入"],
  ["0600422", "医药生物", "2014-08-25", "25.69",  "32.10",  "增持"],
  ["0601328", "银行业",   "2014-08-25", "4.27",   "5.00",   "增持"],
  ["0600426", "化工",     "2014-08-25", "8.91",   "10.00",  "增持"],
  ["1002022", "医药生物", "2014-08-25", "26.00",  "28.00",  "买入"],
  ["1300016", "医药生物", "2014-08-22", "14.28",  "15.75",  "增持"],
  ["1002604", "食品制造", "2014-08-22", "13.65",  "15.30",  "买入"],
  ["1002327", "纺织服装", "2014-08-21", "13.08",  "16.80",  "买入"],
  ["1002041", "农林牧渔", "2014-08-21", "31.68",  "38.15",  "买入"],
  ["1000826", "公共事业", "2014-08-21", "22.90",  "30.00",  "买入"],
  ["1300113", "计算机",   "2014-08-21", "27.43",  "32.00",  "买入"],
  ["1002465", "通信行业", "2014-08-21", "15.82",  "18.80",  "买入"],
  ["0600699", "化工",     "2014-08-21", "27.49",  "35.00",  "买入"],
  ["1002484", "电子行业", "2014-08-21", "19.15",  "21.20",  "买入"],
  ["1002038", "医药生物", "2014-08-21", "41.28",  "50.50",  "买入"],
  ["0600176", "化工",     "2014-08-21", "9.18",  "10.50",   "增持"],
  ["1002601", "化工",     "2014-08-21", "22.08",  "25.50",  "增持"],
  ["1002559", "机械行业", "2014-08-20", "19.22",  "24.00",  "买入"],
  ["1002331", "计算机",   "2014-08-20", "12.26",  "15.00",  "增持"],
  ["1002597", "食品饮料", "2014-08-20", "15.70",  "18.00",  "增持"],
  ["1000830", "化工",     "2014-08-19", "3.95",   "5.10",   "增持"],
  ["1002215", "化工",     "2014-08-19", "7.92",   "10.00",  "买入"],
  ["1002433", "医药生物", "2014-08-19", "11.56",  "13.50",  "增持"],
  ["1002675", "医药生物", "2014-08-19", "19.99",  "25.00",  "买入"],
  ["0600826", "批发零售", "2014-08-19", "18.63",  "25.00",  "买入"],
  ["1000002", "房地产",   "2014-08-19", "9.38",   "10.00",  "买入"],
  ["1300312", "软件服务", "2014-08-18", "19.50",  "26.00",  "买入"],
  ["0600594", "医药生物", "2014-08-18", "40.47",  "51.90",  "买入"],
  ["0600750", "医药生物", "2014-08-18", "17.02",  "20.75",  "增持"],
  ["0600249", "化工",     "2014-08-18", "6.04",   "7.00",   "买入"],
  ["1000028", "医药生物", "2014-08-18", "48.32",  "61.05",  "买入"],
  ["0600079", "医药生物", "2014-08-18", "27.32",  "29.25",  "增持"],
  ["1300180", "化工",     "2014-08-18", "17.66",  "20.50",  "增持"],
  ["0601233", "化工",     "2014-08-18", "6.96",   "8.50",   "增持"],
  ["1000635", "化工",     "2014-08-15", "10.16",  "12.00",  "增持"],
  ["1300015", "医药生物", "2014-08-15", "26.35",  "30.50",  "买入"],
  ["1002491", "通信行业", "2014-08-14", "16.69",  "21.00",  "买入"],
  ["1300295", "计算机",   "2014-08-14", "99.93",  "130.0",  "买入"],
  ["1002108", "化工",     "2014-08-14", "18.48",  "20.00",  "增持"],
  ["1300039", "医药生物", "2014-08-13", "14.55",  "18.50",  "增持"],
  ["1000596", "食品饮料", "2014-08-13", "22.88",  "28.40",  "买入"],
  ["1300020", "计算机",   "2014-08-12", "27.90",  "38.00",  "买入"],
  ["0600557", "医药生物", "2014-08-12", "28.84",  "33.60",  "增持"],
  ["0600305", "食品饮料", "2014-08-12", "16.40",  "19.50",  "买入"],
  ["1300110", "医药生物", "2014-08-12", "7.78",   "8.5",    "增持"],
  ["0600323", "水电燃气", "2014-08-12", "12.72",  "16.25",  "买入"],
  ["1300019", "化工",     "2014-08-12", "13.20",  "15.80",  "增持"],
  ["1002396", "通信行业", "2014-08-11", "26.98",  "31.50",  "买入"],
  ["1002539", "化工",     "2014-08-11", "12.32",  "15.00",  "买入"],
  ["1002521", "造纸印刷", "2014-08-11", "9.88",   "12.60",  "买入"],
  ["1002340", "电力设备", "2014-08-11", "12.79",  "16.45",  "买入"],
  ["1000568", "食品饮料", "2014-08-08", "18.90",  "21.70",  "增持"],
  ["1002477", "农林牧渔", "2014-08-08", "10.69",  "13.20",  "买入"],
  ["0603369", "食品饮料", "2014-08-08", "25.81",  "28.80",  "增持"],
  ["1002470", "化工",     "2014-08-07", "20.65",  "25.00",  "增持"],
  ["1300310", "软件服务", "2014-08-06", "18.66",  "20.00",  "增持"],
  ["1000998", "农林牧渔", "2014-08-06", "13.70",  "15.75",  "买入"],
  ["1002317", "医药生物", "2014-08-06", "21.48",  "25.50",  "买入"],
  ["1000858", "食品饮料", "2014-08-06", "19.50",  "27.60",  "买入"],
  ["0600409", "化工",     "2014-08-04", "4.82",   "6.60",   "买入"],
  ["1002223", "医药生物", "2014-08-04", "27.42",  "30.00",  "买入"],
  ["0600376", "房地产",   "2014-08-04", "5.26",   "6.08",   "买入"],
  ["1300177", "通信行业", "2014-08-04", "14.50",  "18.50",  "买入"],
  ["1002299", "农林牧渔", "2014-07-31", "12.70",  "14.80",  "买入"],
  ["1002462", "医药生物", "2014-07-30", "18.73",  "22.72",  "买入"],
  ["1002588", "化工",     "2014-07-30", "23.12",  "27.00",  "增持"],
  ["1002303", "造纸印刷", "2014-07-29", "13.10",  "18.30",  "买入"],
  ["1000915", "医药生物", "2014-07-25", "26.46",  "35.00",  "买入"],
  ["0600226", "化工",     "2014-07-25", "6.51",   "8.00",   "买入"],
  ["1002683", "化工",     "2014-07-24", "24.68",  "35.00",  "买入"],
  ["1300003", "医药生物", "2014-07-23", "19.84",  "29.00",  "买入"],
  ["1002672", "环保",     "2014-07-22", "26.20",  "38.00",  "买入"],
  ["1002456", "电子行业", "2014-07-22", "21.98",  "30.00",  "买入"],
  ["1000670", "计算机",   "2014-07-18", "9.63",   "12.50",  "增持"],
  ["1002281", "通信行业", "2014-07-17", "33.09",  "42.00",  "买入"],
  ["0600588", "计算机",   "2014-07-17", "15.27",  "19.70",  "买入"],
  ["1002271", "建筑",     "2014-07-16", "25.46",  "31.75",  "买入"],
  ["1000063", "通信行业", "2014-07-16", "13.50",  "18.40",  "买入"],
  ["1002325", "建筑",     "2014-07-16", "8.68",   "12.00",  "买入"],
  ["0600809", "食品饮料", "2014-07-15", "14.30",  "18.50",  "买入"],
  ["1300299", "通信行业", "2014-07-15", "12.60",  "16.00",  "买入"],
  ["1300224", "有色金属", "2014-07-15", "25.41",  "30.00",  "买入"],
  ["1002073", "计算机",   "2014-07-15", "9.58",   "11.48",  "增持"],
  ["1300074", "通信行业", "2014-07-14", "17.00",  "20.50",  "买入"],
  ["1002444", "机械行业", "2014-07-10", "10.55",  "14.00",  "买入"],
  ["1002368", "计算机",   "2014-07-09", "36.51",  "43.05",  "买入"],
  ["1002631", "家居用品", "2014-07-09", "8.95",   "13.20",  "买入"],
  ["0600761", "机械行业", "2014-07-08", "10.51",  "15.00",  "买入"],
  ["0600240", "房地产",   "2014-07-08", "5.53",   "6.50",   "买入"],
  ["0600759", "房地产",   "2014-07-08", "10.45",  "14.00",  "买入"],
  ["1002565", "造纸印刷", "2014-07-07", "8.64",   "10.60",  "买入"],
  ["1000599", "化工",     "2014-07-04", "4.93",   "5.69",   "买入"],
  ["1002354", "造纸印刷", "2014-07-04", "49.50",  "55.00",  "增持"],
  ["1002266", "电力设备", "2014-07-03", "7.46",   "8.70",   "增持"],
  ["0600804", "传播文化", "2014-07-02", "15.75",  "18.00",  "买入"],
  ["1002081", "建筑",     "2014-07-01", "14.16",  "20.00",  "买入"],
  ["1002410", "计算机",   "2014-07-01", "26.44",  "31.85",  "买入"]
);

