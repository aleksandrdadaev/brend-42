import { blue, green, orange, red } from '@/shared/config/colors.config'

import { IDistrictConfig } from '../model/types/district-config.type'

export const firstPath: Omit<IDistrictConfig, 'name'> = {
	fill: '#000',
	d: 'M 206.5,0.5 C 210.35,0.177921 213.517,1.51125 216,4.5C 221.935,-1.53404 224.602,-0.200709 224,8.5C 225.786,9.77735 226.952,11.444 227.5,13.5C 226.543,16.2801 225.376,18.9467 224,21.5C 217.394,22.0015 216.728,24.3349 222,28.5C 221.76,37.2562 225.927,41.7562 234.5,42C 236.422,43.4196 237.755,45.2529 238.5,47.5C 240.115,48.154 241.782,48.654 243.5,49C 244.432,52.0854 245.099,55.2521 245.5,58.5C 246.552,58.3505 247.552,58.5172 248.5,59C 252,63.1667 255.5,67.3333 259,71.5C 258.667,74.8333 258.333,78.1667 258,81.5C 259.796,85.608 261.963,89.4413 264.5,93C 263.392,97.1214 261.059,100.455 257.5,103C 250.877,107.228 244.044,111.061 237,114.5C 235.053,118.78 232.053,122.113 228,124.5C 226.039,132.428 222.039,139.095 216,144.5C 217.682,148.902 219.016,153.568 220,158.5C 222.937,161.884 224.271,165.884 224,170.5C 228.918,176.124 232.418,182.457 234.5,189.5C 234.333,190.833 234.167,192.167 234,193.5C 231.815,194.928 229.815,196.595 228,198.5C 226.406,207.092 225.072,215.759 224,224.5C 222.056,227.734 219.222,229.9 215.5,231C 219.091,232.708 222.757,234.208 226.5,235.5C 229.954,231.037 233.954,227.371 238.5,224.5C 243.097,226.264 245.597,229.597 246,234.5C 248.559,231.651 251.726,230.817 255.5,232C 262.153,237.457 263.32,243.957 259,251.5C 256.333,254.167 253.667,256.833 251,259.5C 250.223,262.429 250.39,265.263 251.5,268C 255.104,266.86 258.27,267.693 261,270.5C 261.498,272.527 261.331,274.527 260.5,276.5C 265.268,284.133 262.934,288.133 253.5,288.5C 251.547,291.98 250.047,295.646 249,299.5C 246.555,300.977 244.388,302.81 242.5,305C 243.664,306.994 244.331,309.161 244.5,311.5C 242.895,315.467 241.229,319.467 239.5,323.5C 240.11,324.505 240.776,324.338 241.5,323C 242.833,322.333 244.167,322.333 245.5,323C 248.508,326.932 251.675,330.765 255,334.5C 255.944,337.347 255.444,339.847 253.5,342C 255.124,343.117 256.124,344.617 256.5,346.5C 254.71,350.58 252.21,354.246 249,357.5C 248.333,358.833 248.333,360.167 249,361.5C 251.069,362.264 253.236,362.764 255.5,363C 256.627,364.753 257.627,366.587 258.5,368.5C 265.607,370.869 267.44,375.535 264,382.5C 261.872,385.63 259.372,388.463 256.5,391C 259.097,393.317 259.93,396.15 259,399.5C 253,408.167 245.667,415.5 237,421.5C 238.543,428.866 235.709,433.366 228.5,435C 218.757,445.143 214.257,443.31 215,429.5C 215.557,427.385 216.391,425.385 217.5,423.5C 215.408,421.211 215.074,418.711 216.5,416C 214.799,415.655 213.466,416.322 212.5,418C 209.833,418.667 207.167,418.667 204.5,418C 200.741,412.892 195.908,409.392 190,407.5C 185.885,409.948 182.052,412.781 178.5,416C 177.127,416.875 175.627,417.375 174,417.5C 169.717,414.415 164.884,412.248 159.5,411C 157.473,408.906 155.806,406.573 154.5,404C 144.593,406.095 140.926,402.429 143.5,393C 137.283,388.939 132.616,383.439 129.5,376.5C 130.728,373.762 132.562,371.429 135,369.5C 135.452,366.851 136.286,364.351 137.5,362C 132.718,358.716 128.718,354.549 125.5,349.5C 119.964,348.792 115.964,345.959 113.5,341C 113.857,336.643 116.19,334.31 120.5,334C 121.831,330.494 123.998,327.661 127,325.5C 127.495,323.527 127.662,321.527 127.5,319.5C 122.512,318.452 117.512,317.286 112.5,316C 111.069,315.535 109.903,314.701 109,313.5C 106.726,309.228 103.726,305.561 100,302.5C 98.1891,298.024 97.1891,293.357 97,288.5C 94.6667,287.833 92.3333,287.167 90,286.5C 88.3909,281.552 87.0575,276.552 86,271.5C 81.7529,268.292 77.2529,265.458 72.5,263C 71,260.833 69.5,258.667 68,256.5C 66.5093,254.996 64.676,254.163 62.5,254C 61.1667,252.333 59.8333,250.667 58.5,249C 54.8333,248.667 51.1667,248.333 47.5,248C 42.8161,240.948 38.3161,233.781 34,226.5C 29.6208,222.723 25.9542,218.39 23,213.5C 22.1089,210.066 22.6089,206.899 24.5,204C 20.8745,201.785 19.7079,198.618 21,194.5C 24.2151,192.329 27.0484,189.829 29.5,187C 27.0403,182.13 23.5403,177.963 19,174.5C 18.3333,172.167 18.3333,169.833 19,167.5C 21.0598,165.007 22.5598,162.174 23.5,159C 21.8922,155.728 19.8922,152.728 17.5,150C 19.1541,147.013 21.4875,144.679 24.5,143C 22.7339,141.302 20.7339,139.969 18.5,139C 15.1498,138.75 11.9831,137.917 9,136.5C 7.89259,132.384 9.22592,129.384 13,127.5C 13.3925,124.367 14.2259,121.367 15.5,118.5C 14.4524,111.956 10.7858,107.79 4.5,106C 1.47738,102.744 1.97738,100.244 6,98.5C 6.8255,95.3977 5.8255,93.0643 3,91.5C 1.70575,86.2925 2.87241,81.7925 6.5,78C 0.0656724,76.5607 -0.934328,73.5607 3.5,69C 10.1267,66.3576 16.7933,63.691 23.5,61C 27.2601,59.8238 30.0934,60.9904 32,64.5C 35.4292,60.5389 39.5959,57.7056 44.5,56C 50.7553,57.057 57.0887,57.3903 63.5,57C 58.8503,54.4078 58.5169,51.4078 62.5,48C 65.5,46.8333 68.5,45.6667 71.5,44.5C 72.5431,41.5795 74.2097,39.0795 76.5,37C 80.8113,35.8088 84.478,33.6421 87.5,30.5C 90.0434,26.5794 92.7101,22.7461 95.5,19C 100.166,17.5026 103.5,19.0026 105.5,23.5C 106.5,23.8333 107.5,24.1667 108.5,24.5C 111.726,23.5536 114.726,22.0536 117.5,20C 121.167,19.3333 124.833,19.3333 128.5,20C 130.049,21.214 131.215,22.714 132,24.5C 135.83,22.7401 138.83,23.7401 141,27.5C 141.414,27.0426 141.914,26.7093 142.5,26.5C 143.208,23.6336 143.875,20.8003 144.5,18C 147.882,18.1945 151.215,18.0278 154.5,17.5C 156.104,17.9391 157.604,18.6057 159,19.5C 161.442,18.0296 163.942,16.6962 166.5,15.5C 168.029,15.5288 169.196,16.1955 170,17.5C 170.417,20.422 171.417,23.0887 173,25.5C 180.075,20.0435 187.575,15.2101 195.5,11C 199.624,7.94546 203.291,4.44546 206.5,0.5 Z',
}

export const districtsConfig: IDistrictConfig[] = [
	{
		name: 'Мариинский',
		fill: green,
		d: 'M 208.5,4.5 C 210.73,6.53451 213.23,8.20117 216,9.5C 217.261,9.24092 218.261,8.57425 219,7.5C 219.516,10.0336 220.683,12.2002 222.5,14C 220.963,15.1096 220.297,16.6096 220.5,18.5C 216.43,17.508 214.43,19.008 214.5,23C 215.919,27.2572 217.586,31.4238 219.5,35.5C 217.242,36.37 214.909,36.37 212.5,35.5C 208.863,37.381 205.196,39.0476 201.5,40.5C 201.326,42.861 200.993,45.1944 200.5,47.5C 202.582,47.472 204.416,48.1387 206,49.5C 208.311,54.9337 207.311,59.2671 203,62.5C 202.438,64.8661 202.604,67.1994 203.5,69.5C 203.178,72.325 202.012,74.6584 200,76.5C 197.21,74.3475 194.044,73.1808 190.5,73C 185.719,70.5287 181.219,67.6953 177,64.5C 174.784,65.9661 172.784,67.6327 171,69.5C 169.418,67.9712 167.585,67.4712 165.5,68C 159.962,73.2073 154.462,78.3739 149,83.5C 148.5,83.1667 148,82.8333 147.5,82.5C 153.634,77.0232 152.634,73.5232 144.5,72C 143.971,69.5714 142.637,67.7381 140.5,66.5C 142.869,63.6826 144.869,60.6826 146.5,57.5C 142.054,57.9264 139.72,55.9264 139.5,51.5C 137.61,51.2965 136.11,51.9632 135,53.5C 133.513,52.7471 133.346,51.9138 134.5,51C 135.793,50.51 137.127,50.3433 138.5,50.5C 137.457,46.9331 136.123,43.4331 134.5,40C 137.876,39.6929 139.21,37.8595 138.5,34.5C 134.921,34.2343 134.587,32.901 137.5,30.5C 145.933,32.8898 149.433,29.8898 148,21.5C 151.64,22.0885 155.14,23.0885 158.5,24.5C 161.353,23.8094 163.853,22.4761 166,20.5C 166.78,23.5117 167.947,26.3451 169.5,29C 171.5,29.6667 173.5,29.6667 175.5,29C 182.495,23.8339 189.828,19.1673 197.5,15C 201.624,11.9455 205.291,8.44546 208.5,4.5 Z',
	},
	{
		name: 'Яйский',
		fill: green,
		d: 'M 97.5,22.5 C 99.0174,22.5106 100.184,23.1772 101,24.5C 102.153,27.7111 102.82,31.0445 103,34.5C 105.311,38.4837 108.144,41.9837 111.5,45C 113.46,48.9248 114.127,52.9248 113.5,57C 112.552,57.4828 111.552,57.6495 110.5,57.5C 110.844,61.2283 111.51,64.8949 112.5,68.5C 108.03,71.7788 107.363,75.7788 110.5,80.5C 108.241,83.0795 107.574,85.9129 108.5,89C 102.926,89.3571 97.9259,91.1904 93.5,94.5C 92.2507,92.5245 90.7507,92.1912 89,93.5C 88.1562,90.3943 88.6562,87.561 90.5,85C 89.6867,79.9545 86.6867,78.1211 81.5,79.5C 81.5,77.5 81.5,75.5 81.5,73.5C 80.5,73.5 79.5,73.5 78.5,73.5C 80.1133,69.3225 81.1133,64.9892 81.5,60.5C 77.682,58.987 73.682,58.3204 69.5,58.5C 69.2007,55.3579 67.5341,53.1912 64.5,52C 67.8333,50.6667 71.1667,49.3333 74.5,48C 76.0169,45.7955 77.3502,43.4622 78.5,41C 87.914,38.0872 94.2473,31.9205 97.5,22.5 Z',
	},
	{
		name: 'Ижморский',
		fill: blue,
		d: 'M 119.5,23.5 C 121.857,23.3367 124.19,23.5034 126.5,24C 127.749,29.5084 130.582,30.6751 135,27.5C 135.5,28 136,28.5 136.5,29C 134.798,31.2354 133.798,33.7354 133.5,36.5C 135.109,36.0941 136.443,36.0941 137.5,36.5C 136.68,38.1112 135.346,38.7778 133.5,38.5C 133.626,42.3587 134.959,45.692 137.5,48.5C 136.009,49.2436 134.509,49.9103 133,50.5C 132.955,54.8237 134.621,55.4904 138,52.5C 138.702,56.733 141.202,58.8997 145.5,59C 144.584,59.3742 143.75,59.8742 143,60.5C 142.428,62.8918 141.262,64.8918 139.5,66.5C 141.425,68.2675 142.758,70.4342 143.5,73C 145.949,73.7246 148.283,74.7246 150.5,76C 147.644,80.0448 145.311,84.3781 143.5,89C 143.87,92.7744 142.37,95.9411 139,98.5C 138.82,100.488 138.986,102.488 139.5,104.5C 138.5,104.5 137.5,104.5 136.5,104.5C 136.575,107.206 136.908,109.873 137.5,112.5C 132.193,114.373 128.859,112.54 127.5,107C 125.913,106.138 124.246,105.471 122.5,105C 119.491,101.658 116.157,98.6584 112.5,96C 113.022,95.4387 113.355,94.772 113.5,94C 108.213,90.0294 107.546,85.5294 111.5,80.5C 109.784,78.0849 109.284,75.4182 110,72.5C 110.71,71.0267 111.876,70.3601 113.5,70.5C 113.156,66.7717 112.49,63.1051 111.5,59.5C 112.325,58.6143 113.325,58.281 114.5,58.5C 113.325,55.9914 113.325,53.4914 114.5,51C 114.037,48.6106 113.37,46.2772 112.5,44C 109.144,40.9837 106.311,37.4837 104,33.5C 103.506,31.8659 103.34,30.1992 103.5,28.5C 106.85,28.665 110.183,28.4983 113.5,28C 115.389,26.2359 117.389,24.7359 119.5,23.5 Z',
	},
	{
		name: 'Тяжинский',
		fill: orange,
		d: 'M 210.5,36.5 C 213.609,36.6553 216.609,37.3219 219.5,38.5C 222.275,43.7883 226.608,46.2883 232.5,46C 233.519,50.1853 236.186,52.3519 240.5,52.5C 239.888,57.7137 241.888,61.3803 246.5,63.5C 249,66.5 251.5,69.5 254,72.5C 251.946,80.6726 254.113,87.5059 260.5,93C 259.072,95.1847 257.405,97.1847 255.5,99C 252.898,99.8834 250.731,101.383 249,103.5C 247.833,101.833 246.667,100.167 245.5,98.5C 240.451,97.9795 235.784,96.6461 231.5,94.5C 231.5,93.5 231.5,92.5 231.5,91.5C 228.053,90.1209 224.386,89.4542 220.5,89.5C 218.109,89.5593 215.775,89.8926 213.5,90.5C 210.639,89.8384 209.973,88.3384 211.5,86C 209.366,82.3477 206.366,81.181 202.5,82.5C 196.054,80.1168 196.054,78.1168 202.5,76.5C 204.536,72.7938 204.869,68.9605 203.5,65C 205.167,62.6667 206.833,60.3333 208.5,58C 207.796,54.8725 207.296,51.7058 207,48.5C 205.352,47.283 203.519,46.4497 201.5,46C 202.38,44.6439 202.714,43.1439 202.5,41.5C 205.975,41.0061 208.642,39.3395 210.5,36.5 Z',
	},
	{
		name: 'Яшкинский',
		fill: blue,
		d: 'M 46.5,59.5 C 55.3799,62.1505 64.2132,62.1505 73,59.5C 75.6033,59.9653 78.1033,60.632 80.5,61.5C 79.1922,65.7755 78.1922,70.1089 77.5,74.5C 78.5,74.5 79.5,74.5 80.5,74.5C 80.5,76.5 80.5,78.5 80.5,80.5C 82.8568,80.3367 85.1902,80.5034 87.5,81C 88.1667,82.3333 88.8333,83.6667 89.5,85C 88,86.8333 86.5,88.6667 85,90.5C 77.6744,89.4963 74.841,92.6629 76.5,100C 76.1751,102.403 75.0084,104.236 73,105.5C 72.2817,102.766 70.7817,102.1 68.5,103.5C 66.9106,107.329 67.9106,110.329 71.5,112.5C 70.1349,113.456 68.6349,114.122 67,114.5C 62.492,108.828 56.6587,106.328 49.5,107C 45.8333,111.667 42.1667,111.667 38.5,107C 31.2168,107.215 27.2168,103.715 26.5,96.5C 27.4107,93.9181 29.0774,91.9181 31.5,90.5C 32.046,89.2278 32.3793,87.8945 32.5,86.5C 30.9624,82.2881 28.9624,78.2881 26.5,74.5C 27.5214,70.9769 29.8548,69.1436 33.5,69C 36.1667,67.6667 38.1667,65.6667 39.5,63C 42.5921,63.1072 44.9255,61.9406 46.5,59.5 Z',
	},
	{
		name: 'Юргинский',
		fill: orange,
		d: 'M 24.5,64.5 C 26.7012,64.8584 28.0345,66.1917 28.5,68.5C 27.4599,70.5229 26.4599,72.5229 25.5,74.5C 27.061,78.7254 29.061,82.7254 31.5,86.5C 30.6139,89.5396 28.7806,91.8729 26,93.5C 24.4814,102.644 28.3147,107.478 37.5,108C 40.0825,111.282 43.4158,112.282 47.5,111C 51.0572,106.69 55.0572,106.357 59.5,110C 66.0828,114.329 65.4162,117.496 57.5,119.5C 57.6495,120.552 57.4828,121.552 57,122.5C 52.4157,121.714 47.9157,121.714 43.5,122.5C 42.1585,120.995 40.4918,120.328 38.5,120.5C 38.5,121.5 38.5,122.5 38.5,123.5C 37.5,123.5 36.5,123.5 35.5,123.5C 35.8175,129.183 33.1508,131.849 27.5,131.5C 27.6476,134.352 26.3143,136.019 23.5,136.5C 20.3366,135.135 17.0033,134.135 13.5,133.5C 22.8191,121.212 21.1525,110.712 8.5,102C 11.9176,99.0346 12.4176,95.5346 10,91.5C 8.28279,90.0118 7.11612,88.1785 6.5,86C 8.57805,83.589 10.2447,80.9223 11.5,78C 10.5128,75.6794 8.84611,74.0128 6.5,73C 12.7119,70.3917 18.7119,67.5583 24.5,64.5 Z',
	},
	{
		name: 'Чебулинский',
		fill: red,
		d: 'M 176.5,65.5 C 183.054,69.9443 190.054,73.6109 197.5,76.5C 195.894,79.7574 196.894,81.9241 200.5,83C 199.405,84.6753 197.905,85.842 196,86.5C 196.259,90.6635 194.759,93.9969 191.5,96.5C 188.966,95.2117 186.466,95.2117 184,96.5C 184.081,100.597 184.914,104.597 186.5,108.5C 184.013,108.782 181.347,108.782 178.5,108.5C 178.055,111.365 178.722,113.865 180.5,116C 178.139,116.197 176.472,117.364 175.5,119.5C 161.021,123.214 146.688,127.547 132.5,132.5C 131.544,131.135 130.878,129.635 130.5,128C 131.866,123.601 132.533,119.101 132.5,114.5C 134.5,114.167 136.5,113.833 138.5,113.5C 138.425,110.794 138.092,108.127 137.5,105.5C 138.5,105.5 139.5,105.5 140.5,105.5C 140.739,103.533 140.406,101.699 139.5,100C 143.464,97.0944 145.13,93.4277 144.5,89C 145.849,88.2276 146.682,87.0609 147,85.5C 149.343,84.8732 151.51,83.8732 153.5,82.5C 157.145,77.021 161.645,72.3544 167,68.5C 171.443,71.7085 174.61,70.7085 176.5,65.5 Z',
	},
	{
		name: 'Тисульский',
		fill: blue,
		d: 'M 204.5,82.5 C 206.713,83.2512 208.713,84.4179 210.5,86C 209.009,88.0217 209.342,89.6883 211.5,91C 214.473,91.1045 217.473,90.9379 220.5,90.5C 223.988,90.7008 227.321,91.3675 230.5,92.5C 230.5,93.5 230.5,94.5 230.5,95.5C 234.403,97.6525 238.736,98.8191 243.5,99C 245.303,100.262 246.636,101.929 247.5,104C 239.901,106.272 234.067,110.772 230,117.5C 227.708,118.79 225.708,120.457 224,122.5C 222.039,130.428 218.039,137.095 212,142.5C 211.333,144.833 211.333,147.167 212,149.5C 214.194,155.296 216.694,160.963 219.5,166.5C 218.515,168.098 218.349,169.765 219,171.5C 224.108,176.725 227.942,182.725 230.5,189.5C 225.917,196.158 220.917,202.492 215.5,208.5C 214.5,208.167 213.833,207.5 213.5,206.5C 214.491,205.335 215.491,204.168 216.5,203C 214.707,200.268 214.707,197.268 216.5,194C 214.492,191.998 212.492,189.998 210.5,188C 205.677,187.391 201.01,187.724 196.5,189C 197.055,184.939 197.888,180.772 199,176.5C 195.785,174.539 192.285,173.373 188.5,173C 186.589,170.378 184.255,168.211 181.5,166.5C 180.786,164.189 179.786,162.022 178.5,160C 174.833,159.667 171.167,159.333 167.5,159C 164.446,156.806 161.112,155.139 157.5,154C 155.919,152.172 154.585,150.172 153.5,148C 148.329,145.491 142.996,143.158 137.5,141C 135.345,140.884 133.345,141.217 131.5,142C 133.799,139.202 133.799,136.535 131.5,134C 143.283,129.849 155.283,126.516 167.5,124C 172.548,122.28 177.215,120.114 181.5,117.5C 180.361,114.996 179.694,112.33 179.5,109.5C 182.167,109.833 184.833,110.167 187.5,110.5C 186.8,106.053 185.967,101.72 185,97.5C 187.823,97.0805 190.656,96.7472 193.5,96.5C 195.92,94.0473 197.086,91.0473 197,87.5C 199.516,85.712 202.016,84.0453 204.5,82.5 Z',
	},
	{
		name: 'Кемеровский',
		fill: orange,
		d: 'M 86.5,89.5 C 87.4511,90.9187 87.7845,92.5853 87.5,94.5C 88.8221,94.67 89.9887,94.3366 91,93.5C 91.5194,94.5156 92.3527,95.1822 93.5,95.5C 97.3562,93.1659 101.523,91.4993 106,90.5C 108.38,91.2007 110.547,92.3674 112.5,94C 111.483,95.0495 111.316,96.2161 112,97.5C 115.49,99.9913 118.657,102.825 121.5,106C 123.246,106.471 124.913,107.138 126.5,108C 127.136,110.775 128.636,112.941 131,114.5C 131.292,119.055 130.792,123.555 129.5,128C 130.077,130.137 130.41,132.304 130.5,134.5C 125.061,136.495 119.395,138.162 113.5,139.5C 112.851,142.289 111.851,144.956 110.5,147.5C 110.887,149.274 111.553,150.941 112.5,152.5C 111.5,154.5 110.5,156.5 109.5,158.5C 107.269,160.11 105.269,161.943 103.5,164C 101.023,162.869 98.8566,163.369 97,165.5C 94.4366,164.741 91.9366,163.741 89.5,162.5C 88.5581,162.608 87.7247,162.941 87,163.5C 86.0701,161.064 84.9034,158.731 83.5,156.5C 80.8392,155.501 78.1725,154.501 75.5,153.5C 74.6601,150.633 72.9935,148.467 70.5,147C 71.1408,144.87 72.4741,143.37 74.5,142.5C 75.4287,141.311 75.762,139.978 75.5,138.5C 72.4375,136.033 69.4375,133.2 66.5,130C 68.5435,128.292 70.2101,126.292 71.5,124C 72.7932,123.51 74.1266,123.343 75.5,123.5C 74.7124,120.03 72.7124,117.363 69.5,115.5C 70.325,114.614 71.325,114.281 72.5,114.5C 71.9172,111.511 70.5838,108.845 68.5,106.5C 69,105.5 69.5,104.5 70,103.5C 71.1994,106.207 73.0327,106.874 75.5,105.5C 77.1691,101.561 78.0025,97.5613 78,93.5C 79.6934,92.8155 81.1934,91.8155 82.5,90.5C 84.488,92.1472 85.8213,91.8139 86.5,89.5 Z',
	},
	{
		name: 'Топкинский',
		fill: red,
		d: 'M 65.5,115.5 C 69.1246,116.66 72.1246,118.826 74.5,122C 70.4598,123.327 67.4598,125.994 65.5,130C 68.3467,133.676 71.3467,137.176 74.5,140.5C 71.6691,141.744 70.0024,143.911 69.5,147C 71.7794,149.049 73.4461,151.549 74.5,154.5C 79.8427,154.993 83.5094,157.659 85.5,162.5C 85.0233,163.478 84.3567,164.311 83.5,165C 80.0844,164.44 76.5844,163.606 73,162.5C 70.3285,165.002 67.6618,165.002 65,162.5C 62.3186,162.671 59.4852,162.837 56.5,163C 55.8921,163.87 55.0588,164.37 54,164.5C 48.4218,163.206 42.9218,161.873 37.5,160.5C 35.0789,161.072 32.7455,161.572 30.5,162C 28.528,157.644 25.8613,153.644 22.5,150C 28.9974,147.159 29.9974,143.159 25.5,138C 27.607,136.736 28.607,134.903 28.5,132.5C 34.1508,132.849 36.8175,130.183 36.5,124.5C 37.5,124.5 38.5,124.5 39.5,124.5C 39.281,123.325 39.6143,122.325 40.5,121.5C 41.3279,122.415 42.3279,123.081 43.5,123.5C 48.3559,122.757 53.3559,122.757 58.5,123.5C 58.5,122.5 58.5,121.5 58.5,120.5C 61.9471,120.385 64.2804,118.719 65.5,115.5 Z',
	},
	{
		name: 'Крапивинский',
		fill: green,
		d: 'M 127.5,135.5 C 129.429,135.231 131.095,135.731 132.5,137C 131.331,139.007 130.665,141.173 130.5,143.5C 132.722,143.822 134.556,143.155 136,141.5C 141.563,144.014 147.063,146.514 152.5,149C 153.585,151.172 154.919,153.172 156.5,155C 160.112,156.139 163.446,157.806 166.5,160C 170.167,160.333 173.833,160.667 177.5,161C 178.786,163.022 179.786,165.189 180.5,167.5C 183.255,169.211 185.589,171.378 187.5,174C 191.556,174.351 195.223,175.685 198.5,178C 196.33,180.803 195.663,183.803 196.5,187C 195.241,187.923 193.908,188.757 192.5,189.5C 191.948,191.333 191.115,193 190,194.5C 188.989,193.663 187.822,193.33 186.5,193.5C 186.649,194.552 186.483,195.552 186,196.5C 184.989,195.663 183.822,195.33 182.5,195.5C 182.539,197.359 181.706,198.692 180,199.5C 176.223,198.465 172.389,197.965 168.5,198C 166.901,199.786 166.067,201.953 166,204.5C 164.989,205.337 163.822,205.67 162.5,205.5C 162.472,207.582 163.139,209.416 164.5,211C 163.239,213.035 161.572,214.535 159.5,215.5C 156.352,214.421 153.685,212.588 151.5,210C 146.771,209.727 142.104,209.061 137.5,208C 133.805,206.057 130.138,204.224 126.5,202.5C 125.313,204.905 123.813,207.239 122,209.5C 121.751,208.376 121.251,207.376 120.5,206.5C 117.93,205.366 115.264,204.532 112.5,204C 113.731,202.817 113.731,201.651 112.5,200.5C 110.766,198.766 108.766,197.432 106.5,196.5C 109.929,191.754 108.929,188.587 103.5,187C 105.223,186.225 106.223,184.892 106.5,183C 105.994,180.265 105.994,177.431 106.5,174.5C 102.089,176.086 98.0893,178.419 94.5,181.5C 89.9659,180.083 85.6325,178.25 81.5,176C 82.7282,175.221 83.7282,174.221 84.5,173C 82.1263,167.69 83.793,164.523 89.5,163.5C 91.7033,165.178 94.2033,166.178 97,166.5C 98.2613,166.241 99.2613,165.574 100,164.5C 101.388,165.554 102.888,165.72 104.5,165C 108.41,162.419 111.243,158.919 113,154.5C 113.617,151.965 113.117,149.632 111.5,147.5C 113.064,145.425 114.064,143.092 114.5,140.5C 118.351,139.067 122.351,138.067 126.5,137.5C 126.863,136.817 127.196,136.15 127.5,135.5 Z',
	},
	{
		name: 'Промышленновский',
		fill: blue,
		d: 'M 27.5,161.5 C 30.6945,163.896 34.0278,163.896 37.5,161.5C 42.8799,163.035 48.3799,164.368 54,165.5C 55.928,165.067 57.7613,164.4 59.5,163.5C 61.4104,164.548 63.2438,164.548 65,163.5C 67.6153,166.07 70.282,166.07 73,163.5C 76.1072,164.795 79.2739,165.795 82.5,166.5C 82.2436,168.792 82.5769,170.959 83.5,173C 80.9683,173.612 80.1349,175.112 81,177.5C 84.5325,178.909 88.0325,180.409 91.5,182C 87.9523,183.941 84.2857,185.607 80.5,187C 78.6608,190.004 76.3274,192.504 73.5,194.5C 71.8307,193.329 70.3307,191.996 69,190.5C 67.0501,191.283 65.2168,192.283 63.5,193.5C 62.3109,193.244 61.1442,192.911 60,192.5C 58.2866,193.954 57.1199,195.788 56.5,198C 55.552,198.483 54.552,198.649 53.5,198.5C 52.9648,201.238 53.9648,203.072 56.5,204C 55.5838,204.374 54.7504,204.874 54,205.5C 51.8282,204.491 50.6615,202.824 50.5,200.5C 45.5499,201.93 40.5499,203.43 35.5,205C 34.8534,206.609 34.02,208.109 33,209.5C 32.4115,207.137 30.9115,206.137 28.5,206.5C 29.3403,202.461 28.007,199.461 24.5,197.5C 27.6095,195.525 30.4428,193.192 33,190.5C 33.9076,186.511 33.241,182.845 31,179.5C 27.6876,177.355 24.8543,174.688 22.5,171.5C 24.7585,168.479 26.4251,165.146 27.5,161.5 Z',
	},
	{
		name: 'Ленинск-Кузнецкий',
		fill: orange,
		d: 'M 104.5,175.5 C 104.662,177.888 104.995,180.388 105.5,183C 103.826,184.506 102.826,186.339 102.5,188.5C 104.714,188.291 106.381,189.124 107.5,191C 106.129,193.319 105.462,195.819 105.5,198.5C 108.14,198.954 110.473,200.121 112.5,202C 111.874,202.75 111.374,203.584 111,204.5C 106.961,205.756 102.794,206.423 98.5,206.5C 98.33,207.822 98.6634,208.989 99.5,210C 96.7143,212.06 93.7143,213.56 90.5,214.5C 89.943,218.175 89.2763,221.841 88.5,225.5C 88.6082,226.442 88.9415,227.275 89.5,228C 87.3291,230.574 84.6624,231.907 81.5,232C 82.724,229.61 83.224,227.11 83,224.5C 78.6793,221.179 74.6793,217.512 71,213.5C 68.5667,214.479 66.0667,215.145 63.5,215.5C 63.281,220.629 62.6144,220.629 61.5,215.5C 57.885,215.206 54.7184,216.206 52,218.5C 48.7341,216.422 45.9008,213.756 43.5,210.5C 41.1433,208.648 38.4767,207.481 35.5,207C 35.8333,206.667 36.1667,206.333 36.5,206C 40.8299,204.745 44.9966,203.245 49,201.5C 50.8238,206.67 53.6571,207.503 57.5,204C 56.4911,202.832 55.4911,201.665 54.5,200.5C 57.6474,199.291 59.4807,196.958 60,193.5C 63.3973,194.929 66.3973,194.262 69,191.5C 70.0295,194.875 72.1961,196.042 75.5,195C 77.845,192.986 79.845,190.653 81.5,188C 86.7302,185.551 92.0635,183.384 97.5,181.5C 99.8688,179.499 102.202,177.499 104.5,175.5 Z',
	},
	{
		name: 'Новокузнецкий',
		fill: orange,
		d: 'M 202.5,188.5 C 204.857,188.337 207.19,188.503 209.5,189C 211.091,191.133 213.091,192.799 215.5,194C 213.403,197.159 213.403,200.159 215.5,203C 212.527,204.224 211.86,206.224 213.5,209C 214.833,209.667 216.167,209.667 217.5,209C 219,206.833 220.5,204.667 222,202.5C 222.374,203.416 222.874,204.25 223.5,205C 221.843,210.665 220.677,216.498 220,222.5C 218.048,224.894 215.548,226.394 212.5,227C 211.426,227.739 210.759,228.739 210.5,230C 211.771,232.933 213.438,235.599 215.5,238C 214.678,240.434 214.344,242.934 214.5,245.5C 211.728,245.22 209.228,245.887 207,247.5C 205.353,254.908 203.52,262.242 201.5,269.5C 198.567,270.93 196.067,272.93 194,275.5C 193.194,281.084 193.361,286.584 194.5,292C 191.826,291.847 189.16,291.347 186.5,290.5C 186.343,291.873 186.51,293.207 187,294.5C 190.663,298.834 193.496,303.667 195.5,309C 191.629,318.092 194.629,322.592 204.5,322.5C 206.891,322.441 209.225,322.107 211.5,321.5C 213.002,322.083 214.335,322.916 215.5,324C 210.301,328.888 206.467,334.721 204,341.5C 201.404,339.98 198.571,339.147 195.5,339C 193.356,337.854 191.523,336.354 190,334.5C 189.228,334.645 188.561,334.978 188,335.5C 186.097,333.559 185.264,331.226 185.5,328.5C 179.862,327.818 175.529,329.818 172.5,334.5C 170.5,335.167 168.5,335.833 166.5,336.5C 163.246,334.141 159.746,333.474 156,334.5C 154.103,332.984 151.936,332.317 149.5,332.5C 149.519,334.06 149.852,335.56 150.5,337C 148.551,339.326 148.218,341.826 149.5,344.5C 150.736,345.246 152.07,345.579 153.5,345.5C 152.987,348.449 152.987,351.282 153.5,354C 149.713,356.863 145.38,358.363 140.5,358.5C 137.651,355.487 134.485,352.82 131,350.5C 130.727,348.671 129.893,347.171 128.5,346C 125.833,345 123.167,344 120.5,343C 118.963,341.89 118.297,340.39 118.5,338.5C 119.873,338.657 121.207,338.49 122.5,338C 124.974,334.225 127.807,330.725 131,327.5C 130.839,323.166 132.006,319.333 134.5,316C 134.355,315.228 134.022,314.561 133.5,314C 130.623,313.275 127.957,313.775 125.5,315.5C 122.06,313.631 118.393,312.465 114.5,312C 110.281,309.695 109.614,306.695 112.5,303C 112.355,302.228 112.022,301.561 111.5,301C 114.66,300.009 117.16,298.176 119,295.5C 120.011,296.337 121.178,296.67 122.5,296.5C 122.351,295.448 122.517,294.448 123,293.5C 124.726,294.576 126.559,294.743 128.5,294C 136.572,290.494 138.905,284.661 135.5,276.5C 136.939,274.725 137.939,272.725 138.5,270.5C 137.652,267.49 137.152,264.49 137,261.5C 137.915,260.672 138.581,259.672 139,258.5C 141.676,259.572 144.009,258.905 146,256.5C 146,254.5 146,252.5 146,250.5C 148.921,248.288 152.088,246.455 155.5,245C 158.229,239.605 161.729,234.772 166,230.5C 167.14,227.472 166.306,225.305 163.5,224C 164.428,223.612 165.095,222.945 165.5,222C 164.5,220.333 163.5,218.667 162.5,217C 162.998,214.752 163.998,212.752 165.5,211C 165.097,209.527 164.43,208.194 163.5,207C 164.766,206.691 165.933,206.191 167,205.5C 167.048,202.671 168.048,200.337 170,198.5C 173.28,199.246 176.614,199.913 180,200.5C 182.261,200.113 183.594,198.779 184,196.5C 185.011,197.337 186.178,197.67 187.5,197.5C 187.351,196.448 187.517,195.448 188,194.5C 189.049,195.517 190.216,195.684 191.5,195C 192.218,193.013 193.218,191.179 194.5,189.5C 197.484,190.965 200.151,190.631 202.5,188.5 Z',
	},
	{
		name: 'Беловский',
		fill: blue,
		d: 'M 127.5,203.5 C 134.091,208.906 141.758,211.406 150.5,211C 153.432,214.466 157.098,216.299 161.5,216.5C 161.393,218.903 162.393,220.736 164.5,222C 163.572,222.388 162.905,223.055 162.5,224C 165.933,226.121 166.267,228.621 163.5,231.5C 155.89,232.467 148.223,232.8 140.5,232.5C 140.33,233.822 140.663,234.989 141.5,236C 140.833,236.167 140.167,236.333 139.5,236.5C 137.021,233.662 133.854,231.662 130,230.5C 126.196,233.631 122.363,236.798 118.5,240C 117.223,240.127 116.057,239.627 115,238.5C 114,238.833 113,239.167 112,239.5C 108.94,242.737 106.44,246.403 104.5,250.5C 102.083,253.083 99.2493,255.083 96,256.5C 96.0196,250.756 93.1863,247.423 87.5,246.5C 87.7394,244.533 87.4061,242.699 86.5,241C 91.4376,238.395 91.771,235.229 87.5,231.5C 90.3787,230.197 91.0454,228.197 89.5,225.5C 90.3818,222.209 91.0484,218.876 91.5,215.5C 94.2234,214.648 96.89,213.481 99.5,212C 100.833,210.667 100.833,209.333 99.5,208C 104.187,207.274 108.854,206.441 113.5,205.5C 115.568,205.967 117.568,206.634 119.5,207.5C 120.386,208.325 120.719,209.325 120.5,210.5C 121.675,210.719 122.675,210.386 123.5,209.5C 125.503,207.867 126.836,205.867 127.5,203.5 Z',
	},
	{
		name: 'Гурьевский',
		fill: red,
		d: 'M 27.5,207.5 C 29.9229,207.424 31.7562,208.424 33,210.5C 34.582,208.971 36.4153,208.471 38.5,209C 42.708,212.974 47.208,216.474 52,219.5C 54.5706,217.809 57.404,216.809 60.5,216.5C 60.1667,219.5 61.5,220.833 64.5,220.5C 64.5,219.167 64.5,217.833 64.5,216.5C 66.8268,216.335 68.9935,215.669 71,214.5C 74.1667,219 78,222.833 82.5,226C 81.4459,228.382 80.7792,230.882 80.5,233.5C 84.5312,231.347 87.5312,232.347 89.5,236.5C 88.3291,238.169 86.9958,239.669 85.5,241C 86.2865,243.099 86.6199,245.266 86.5,247.5C 89.1398,247.954 91.4732,249.121 93.5,251C 95.1063,254.09 94.4396,254.924 91.5,253.5C 87.596,254.281 85.2627,256.615 84.5,260.5C 82.8662,260.968 81.6995,261.968 81,263.5C 76.1184,260.286 72.2851,256.119 69.5,251C 65.9292,250.982 63.5958,249.315 62.5,246C 58.4423,243.437 54.109,242.77 49.5,244C 43.5898,232.086 36.0898,221.252 27,211.5C 26.4209,210.072 26.5876,208.738 27.5,207.5 Z',
	},
	{
		name: 'Междуреченский',
		fill: green,
		d: 'M 237.5,229.5 C 240.837,230.484 242.337,232.817 242,236.5C 245.687,240.585 249.021,240.252 252,235.5C 256.771,239.15 257.771,243.817 255,249.5C 252.333,252.167 249.667,254.833 247,257.5C 246.333,261.5 246.333,265.5 247,269.5C 249.288,273.43 252.455,274.43 256.5,272.5C 256.032,276.131 256.699,279.465 258.5,282.5C 254.917,282.949 251.75,284.282 249,286.5C 247.513,290.116 246.18,293.783 245,297.5C 238.303,300.48 236.803,305.147 240.5,311.5C 237.822,316.027 235.822,320.861 234.5,326C 236.8,330.025 239.8,330.525 243.5,327.5C 245.779,331.116 248.445,334.449 251.5,337.5C 249.408,339.789 249.074,342.289 250.5,345C 246.364,345.782 242.197,346.282 238,346.5C 236.509,344.996 234.676,344.163 232.5,344C 231.833,343 231.167,342 230.5,341C 227.096,340.779 223.762,341.279 220.5,342.5C 217.379,341.774 214.713,340.274 212.5,338C 216.506,334.48 217.506,330.48 215.5,326C 216.887,322.52 215.554,320.687 211.5,320.5C 207.535,321.53 203.535,321.697 199.5,321C 194.596,318.053 193.596,314.053 196.5,309C 194.554,302.897 191.554,297.397 187.5,292.5C 187.667,292.167 187.833,291.833 188,291.5C 190.228,293.113 192.728,293.78 195.5,293.5C 194.479,287.87 194.313,282.204 195,276.5C 196.739,274.259 198.906,272.592 201.5,271.5C 202.584,270.335 203.417,269.002 204,267.5C 204.95,261.081 206.284,254.748 208,248.5C 210.228,246.887 212.728,246.22 215.5,246.5C 215.508,243.455 215.841,240.455 216.5,237.5C 220.281,236.789 223.281,237.955 225.5,241C 226.5,241.667 227.5,241.667 228.5,241C 230.951,236.718 233.951,232.884 237.5,229.5 Z',
	},
	{
		name: 'Прокопьевский',
		fill: green,
		d: 'M 129.5,231.5 C 132.608,232.383 134.941,234.216 136.5,237C 138.473,237.495 140.473,237.662 142.5,237.5C 142.67,236.178 142.337,235.011 141.5,234C 148.167,233.333 154.833,233.333 161.5,234C 159.349,237.433 157.015,240.766 154.5,244C 151.088,245.455 147.921,247.288 145,249.5C 144.257,251.441 144.424,253.274 145.5,255C 143.532,257.109 141.365,257.942 139,257.5C 137.779,258.272 136.779,259.272 136,260.5C 135.531,263.944 136.031,267.278 137.5,270.5C 134.063,273.904 133.73,277.571 136.5,281.5C 135.663,286.945 132.663,290.778 127.5,293C 125.512,293.18 123.512,293.014 121.5,292.5C 121.649,293.552 121.483,294.552 121,295.5C 119.951,294.483 118.784,294.316 117.5,295C 116.076,297.218 114.076,298.718 111.5,299.5C 110.269,300.651 110.269,301.817 111.5,303C 110.667,303.833 109.833,304.667 109,305.5C 107.333,303.833 105.667,302.167 104,300.5C 102.343,295.237 101.01,289.904 100,284.5C 97.8526,283.887 95.686,283.221 93.5,282.5C 92.3197,277.388 90.8197,272.388 89,267.5C 86.7497,266.292 84.583,264.959 82.5,263.5C 85.2046,262.432 86.7046,260.432 87,257.5C 88.586,256.624 90.086,255.624 91.5,254.5C 93.1315,255.297 94.6315,256.297 96,257.5C 99.7412,256.381 102.908,254.381 105.5,251.5C 107.815,246.701 110.982,242.701 115,239.5C 116.067,241.283 117.567,241.783 119.5,241C 122.293,239.139 124.96,237.139 127.5,235C 128.305,233.887 128.972,232.721 129.5,231.5 Z',
	},
	{
		name: 'Таштагольский',
		fill: red,
		d: 'M 214.5,327.5 C 215.267,328.172 215.934,329.005 216.5,330C 208.815,337.114 210.148,341.614 220.5,343.5C 223.208,342.959 225.874,342.292 228.5,341.5C 229.845,342.347 230.845,343.513 231.5,345C 233.906,345.306 236.073,346.139 238,347.5C 242.197,347.215 246.364,347.048 250.5,347C 249.773,348.399 249.273,349.899 249,351.5C 240.97,358.877 242.137,364.044 252.5,367C 253.641,371.145 256.308,373.478 260.5,374C 261.323,376.925 260.823,379.758 259,382.5C 257,384.5 255,386.5 253,388.5C 252.07,391.85 252.903,394.683 255.5,397C 249.333,405.833 241.833,413.333 233,419.5C 232.667,422.5 232.333,425.5 232,428.5C 227.174,430.317 223.174,433.317 220,437.5C 219.009,436.57 218.509,435.404 218.5,434C 219.404,430.456 220.404,426.956 221.5,423.5C 221.61,421.626 220.944,420.126 219.5,419C 223.037,417.174 223.371,414.84 220.5,412C 215.929,410.774 211.929,411.607 208.5,414.5C 204.753,412.261 201.42,409.427 198.5,406C 193.433,402.909 188.433,402.909 183.5,406C 180.424,408.62 177.258,411.12 174,413.5C 173.535,412.069 172.701,410.903 171.5,410C 167.981,409.605 164.648,408.605 161.5,407C 158.887,399.694 153.887,397.194 146.5,399.5C 147.412,395.869 147.579,392.203 147,388.5C 141.241,386.408 137.074,382.574 134.5,377C 138.874,372.055 141.374,366.222 142,359.5C 144.74,358.718 147.574,358.218 150.5,358C 151.868,356.66 153.201,355.326 154.5,354C 154.214,351 154.214,347.834 154.5,344.5C 149.261,343.846 148.261,341.346 151.5,337C 151.415,335.893 151.081,334.893 150.5,334C 152.368,333.996 154.202,334.496 156,335.5C 159.683,334.791 163.183,335.458 166.5,337.5C 171.409,337.381 175.076,335.214 177.5,331C 179.74,330.023 182.073,329.523 184.5,329.5C 184.317,331.936 184.984,334.103 186.5,336C 187.784,336.684 188.951,336.517 190,335.5C 190.465,336.931 191.299,338.097 192.5,339C 196.377,340.008 200.211,341.175 204,342.5C 207.008,337.148 210.508,332.148 214.5,327.5 Z',
	},
]