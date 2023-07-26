import './HeaderDesktop.css'

export default function HeaderDesktop() {
    return (
        <div className="HeaderDesktop">
            <div className="Container">
                <div className="Logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="182" height="84" viewBox="0 0 182 84" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M84.52 42.8391C84.682 43.7031 85.492 44.2971 86.356 44.1351C87.22 43.9731 87.814 43.1631 87.652 42.2991C87.382 40.5711 87.274 38.2491 87.328 36.4671C87.382 35.5491 87.382 34.4691 87.328 33.2271C87.058 23.5071 86.572 16.2171 85.87 11.4111C85.168 6.44308 82.9 2.55508 77.77 3.04108C75.448 3.25708 74.53 3.68908 73.936 6.22708C73.5694 7.74564 73.6091 9.51809 73.6611 11.8399V11.84L73.666 12.0591C73.72 13.3011 73.72 13.9491 73.72 14.0571C73.72 18.2576 73.8771 22.6152 74.0881 28.4701L74.098 28.7451L74.314 35.4411C74.476 37.7631 74.476 40.3011 74.044 42.1911C73.828 43.0551 74.314 43.8651 75.178 44.0811C76.042 44.2971 76.852 43.8111 77.068 42.9471C77.662 40.6251 77.608 37.3311 77.446 35.3331C77.392 34.7391 77.284 31.5531 77.122 25.8831C77.284 25.9371 77.392 25.9371 77.554 25.9371C78.094 25.9371 79.282 25.9911 81.118 26.0991C82.36 26.1531 83.278 26.2071 83.98 26.2611C83.9944 26.7065 84.0125 27.2016 84.0325 27.7454L84.0326 27.7465C84.0877 29.2463 84.1564 31.1162 84.196 33.3351C84.25 34.5771 84.25 35.6031 84.196 36.3591C84.142 38.2491 84.25 40.8951 84.52 42.8391ZM3.35799 44.6211C4.22199 44.6751 4.97799 44.0271 5.03199 43.1631C5.40999 38.7891 5.46399 33.8211 5.30199 28.2591C9.29799 27.1251 11.782 25.2351 12.808 22.5891C13.726 19.9971 13.51 15.0831 12.214 11.0331C10.756 6.28108 7.83999 2.66308 3.68199 3.68908C2.33199 3.95908 1.46799 4.49908 1.03599 5.25508C0.873991 5.47108 0.819991 5.74108 0.819991 6.01108C0.765991 6.11908 0.765991 6.28108 0.765991 6.44308V7.46908C0.818645 8.89075 0.8713 9.54228 1.27439 14.5301L1.30599 14.9211C2.22399 27.0171 2.43999 36.3591 1.89999 42.9471C1.84599 43.8111 2.49399 44.5671 3.35799 44.6211ZM5.13999 25.0191C4.97799 22.2111 4.76199 18.7551 4.43799 14.7051C4.00599 9.95308 3.95199 8.71108 3.89799 7.36108V6.82108L4.32999 6.71308C5.30199 6.49708 6.21999 6.82108 7.02999 7.68508C8.75799 9.57508 9.99999 13.6791 10.216 17.5131C10.432 21.4011 10.324 23.3451 5.13999 25.0191ZM24.148 44.0811C21.826 44.3511 19.936 44.4591 18.478 44.4051C17.614 44.4051 16.966 43.6491 16.966 42.7851C16.966 41.9211 17.722 41.2731 18.586 41.2731C19.774 41.3271 21.232 41.2191 22.906 41.0571C22.89 40.849 22.874 40.5981 22.8552 40.3031L22.8551 40.3026L22.8551 40.3026C22.8104 39.6027 22.7499 38.6544 22.636 37.4391C22.2213 32.6698 22.1549 30.0405 22.1503 24.9169L22.1508 22.1368C22.1534 19.9498 22.1635 17.5806 22.204 15.0291C22.258 11.6271 22.258 9.03508 22.258 7.19908V7.09108H19.018C18.154 7.09108 17.452 6.38908 17.452 5.52508C17.452 4.66108 18.154 3.95908 19.018 3.95908L23.0962 3.9581C26.4504 3.95534 28.5362 3.94487 29.332 3.90508C30.196 3.90508 30.952 4.55308 30.952 5.41708C30.952 6.28108 30.304 7.03708 29.44 7.03708C28.252 7.09108 26.902 7.09108 25.39 7.09108V19.6191C25.282 27.8811 25.282 31.9851 25.39 31.9851C25.444 33.0111 25.552 34.7391 25.768 37.1691C25.9071 38.4212 25.9666 39.4742 26.0148 40.3281L26.0149 40.3297C26.0228 40.4695 26.0304 40.604 26.038 40.7331C27.928 40.5171 29.494 40.4091 30.736 40.4091C31.6 40.4091 32.302 41.1111 32.302 41.9751C32.302 42.8391 31.6 43.5411 30.736 43.5411C29.494 43.5411 27.658 43.7031 25.228 43.9731C25.012 44.0811 24.796 44.1351 24.526 44.1351C24.418 44.1351 24.31 44.1351 24.148 44.0811ZM40.132 44.5131C41.86 44.6751 46.72 44.6211 48.88 44.4051C49.744 44.3511 50.338 43.5411 50.284 42.6771C50.23 41.8131 49.42 41.2191 48.556 41.2731C46.612 41.4891 41.86 41.5431 40.348 41.3811H40.186L40.672 38.8431C40.7752 38.4648 40.8564 38.0866 40.9437 37.6804L40.9437 37.6804L40.9437 37.6802L40.9438 37.6798C40.9935 37.4484 41.0452 37.2078 41.104 36.9531C41.1602 36.7284 41.2098 36.5103 41.2575 36.3009L41.2575 36.3008L41.2575 36.3008L41.2576 36.3007C41.3474 35.9061 41.4302 35.5425 41.536 35.2251C41.644 34.7391 41.698 34.4691 41.698 34.3611C43.156 27.8811 45.262 20.1591 48.124 11.1411C48.124 11.0871 48.394 10.4931 48.988 9.30508C49.474 8.17108 49.636 7.19908 49.474 6.33508C49.096 4.12108 47.314 3.79708 45.37 3.79708C44.884 3.79708 44.02 3.79708 42.778 3.85108C42.2117 3.86339 41.6987 3.87571 41.239 3.88674C39.6825 3.92409 38.7375 3.94677 38.404 3.90508C37.972 3.85108 37.594 3.95908 37.27 4.22908C36.892 4.49908 36.73 4.87708 36.676 5.30908C36.622 6.17308 37.216 6.98308 38.08 7.03708C38.5438 7.07924 39.6001 7.05557 41.3003 7.01746L41.3003 7.01746L41.3004 7.01746L41.3006 7.01745L41.3015 7.01744C41.7786 7.00674 42.3064 6.99491 42.886 6.98308C44.236 6.92908 45.046 6.92908 45.37 6.92908H46.126C46.18 6.87508 46.18 6.87508 46.234 6.87508C46.288 6.87508 46.342 6.87508 46.288 6.92908C46.3196 6.91327 46.3466 6.89745 46.369 6.88435C46.423 6.85272 46.45 6.8369 46.45 6.87508C46.504 7.14508 46.396 7.46908 46.126 7.95508C45.7639 8.77806 45.482 9.36022 45.3049 9.72604L45.3049 9.72622C45.1915 9.96038 45.1211 10.1059 45.1 10.1691C42.238 19.2951 40.078 27.1251 38.674 33.7131C38.6263 33.7607 38.5787 33.9767 38.4939 34.3609L38.4938 34.3611L38.4938 34.3611L38.458 34.5231L38.026 36.3051C37.864 37.007 37.756 37.6009 37.648 38.1949L37.648 38.1949L37.648 38.1951C37.378 39.3831 37.162 40.3551 37.054 41.0571L37.0305 41.2426C36.9854 41.5971 36.946 41.9065 36.946 42.1371V42.6771C37.108 43.5411 37.594 44.0271 38.296 44.2431L38.836 44.4051C39.214 44.4591 39.646 44.5131 40.132 44.5131ZM66.862 44.4051C64.702 44.6211 59.842 44.6751 58.114 44.5131C57.628 44.5131 57.196 44.4591 56.818 44.4051L56.278 44.2431C55.576 44.0271 55.09 43.5411 54.928 42.6771V42.1371C54.928 41.9065 54.9674 41.5971 55.0125 41.2426L55.036 41.0571C55.144 40.3551 55.36 39.3831 55.63 38.1951L55.63 38.1949L55.63 38.1949C55.738 37.6009 55.846 37.007 56.008 36.3051L56.44 34.5231L56.4758 34.3611L56.4758 34.3611L56.4759 34.3609C56.5607 33.9767 56.6083 33.7607 56.656 33.7131C58.06 27.1251 60.22 19.2951 63.082 10.1691C63.1031 10.1059 63.1735 9.96038 63.2868 9.72622L63.2869 9.72604C63.464 9.36022 63.7459 8.77806 64.108 7.95508C64.378 7.46908 64.486 7.14508 64.432 6.87508C64.432 6.8369 64.405 6.85272 64.351 6.88435C64.3286 6.89745 64.3016 6.91327 64.27 6.92908C64.324 6.87508 64.27 6.87508 64.216 6.87508C64.162 6.87508 64.162 6.87508 64.108 6.92908H63.352C63.028 6.92908 62.218 6.92908 60.868 6.98308C60.2885 6.99491 59.7607 7.00674 59.2837 7.01743L59.2826 7.01745L59.2824 7.01746L59.2823 7.01746L59.2823 7.01746C57.5821 7.05557 56.5258 7.07924 56.062 7.03708C55.198 6.98308 54.604 6.17308 54.658 5.30908C54.712 4.87708 54.874 4.49908 55.252 4.22908C55.576 3.95908 55.954 3.85108 56.386 3.90508C56.7195 3.94677 57.6645 3.92409 59.221 3.88674C59.6807 3.87571 60.1937 3.86339 60.76 3.85108C62.002 3.79708 62.866 3.79708 63.352 3.79708C65.296 3.79708 67.078 4.12108 67.456 6.33508C67.618 7.19908 67.456 8.17108 66.97 9.30508C66.376 10.4931 66.106 11.0871 66.106 11.1411C63.244 20.1591 61.138 27.8811 59.68 34.3611C59.68 34.4691 59.626 34.7391 59.518 35.2251C59.4122 35.5426 59.3294 35.9062 59.2395 36.3008L59.2395 36.3008L59.2395 36.3009C59.1918 36.5103 59.1422 36.7284 59.086 36.9531C59.0272 37.208 58.9755 37.4486 58.9257 37.6802L58.9257 37.6804L58.9257 37.6804C58.8384 38.0866 58.7571 38.4648 58.654 38.8431L58.168 41.3811H58.33C59.842 41.5431 64.594 41.4891 66.538 41.2731C67.402 41.2191 68.212 41.8131 68.266 42.6771C68.32 43.5411 67.726 44.3511 66.862 44.4051ZM82.5935 23.0535C83.1214 23.0874 83.556 23.1153 83.818 23.1291C83.602 18.9711 83.224 15.2451 82.738 11.8431C82.144 7.95508 80.848 5.90308 78.094 6.17308C77.608 6.22708 77.338 6.22708 77.23 6.22708C77.122 6.38908 77.014 6.60508 76.96 6.92908C76.744 8.06308 76.744 9.41308 76.798 11.9511C76.852 13.1931 76.852 13.8951 76.852 14.0571C76.852 16.5951 76.906 19.5111 77.014 22.9131C77.176 22.8591 77.392 22.8051 77.554 22.8051C78.7201 22.8051 81.0539 22.9548 82.5935 23.0535Z"
                              fill="black"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M9.36 83.0511C9.22667 83.1978 8.93333 83.2711 8.48 83.2711C8.26667 83.2711 7.8 83.2444 7.08 83.1911C6.36 83.1378 5.6 83.1111 4.8 83.1111C3.84 83.1111 3.10667 83.1311 2.6 83.1711C2.09333 83.2111 1.54667 83.2444 0.96 83.2711C0.746667 83.2711 0.533333 83.2178 0.32 83.1111C0.106667 83.0044 0 82.7778 0 82.4311C0 82.2444 0.0533333 81.9911 0.16 81.6711C0.533333 80.4977 0.76 79.7511 0.84 79.4311C0.92 79.1111 0.986667 78.2578 1.04 76.8711C1.09333 75.4844 1.12 74.4578 1.12 73.7911V62.6711C1.12 61.8178 1.1 60.9978 1.06 60.2111C1.02 59.4244 0.946667 58.8044 0.84 58.3511C0.733333 57.8978 0.613333 57.4644 0.48 57.0511C0.346667 56.6378 0.28 56.3244 0.28 56.1111C0.28 55.7911 0.4 55.5711 0.64 55.4511C0.88 55.3311 1.12 55.2711 1.36 55.2711C2.05333 55.2711 2.62667 55.3044 3.08 55.3711C3.53333 55.4378 4.08 55.4711 4.72 55.4711C5.6 55.4711 6.20667 55.4378 6.54 55.3711C6.87333 55.3044 7.2 55.2711 7.52 55.2711C8.08 55.2711 8.52 55.6444 8.84 56.3911C9.08 56.9778 9.32 57.5511 9.56 58.1111C10.0133 59.1244 10.3867 59.8444 10.68 60.2711C11.1867 61.0444 11.72 61.4311 12.28 61.4311C12.5733 61.4311 12.8933 61.2578 13.24 60.9111C13.6933 60.4578 14.2667 59.6444 14.96 58.4711C15.84 56.9778 16.42 56.0711 16.7 55.7511C16.98 55.4311 17.3467 55.2711 17.8 55.2711C18.28 55.2711 18.6667 55.2978 18.96 55.3511C19.2533 55.4044 19.7067 55.4311 20.32 55.4311C21.1467 55.4311 21.7933 55.4178 22.26 55.3911C22.7267 55.3644 23.2 55.3244 23.68 55.2711C24.0267 55.2711 24.28 55.3378 24.44 55.4711C24.6 55.6044 24.68 55.8044 24.68 56.0711C24.68 56.8444 24.52 57.6444 24.2 58.4711C23.88 59.2978 23.72 60.6044 23.72 62.3911V74.5111C23.72 76.2711 23.88 77.9111 24.2 79.4311C24.3067 79.9111 24.4333 80.4711 24.58 81.1111C24.7267 81.7511 24.8 82.2044 24.8 82.4711C24.8 82.7111 24.74 82.9044 24.62 83.0511C24.5 83.1978 24.2533 83.2711 23.88 83.2711C23.6133 83.2711 23.1067 83.2444 22.36 83.1911C21.6133 83.1378 20.8133 83.1111 19.96 83.1111C19.08 83.1111 18.3867 83.1378 17.88 83.1911C17.3733 83.2444 16.8533 83.2711 16.32 83.2711C15.6267 83.2711 15.28 83.0444 15.28 82.5911C15.6267 81.4977 15.92 80.3844 16.16 79.2511C16.4 78.1178 16.52 76.7778 16.52 75.2311V67.8711C16.52 67.3644 16.3867 67.1111 16.12 67.1111C15.9867 67.1111 15.7733 67.3044 15.48 67.6911C15.1867 68.0778 14.96 68.3644 14.8 68.5511L13.76 70.0711C13.3333 70.5778 12.88 70.8311 12.4 70.8311C11.92 70.8311 11.5133 70.6911 11.18 70.4111C10.8467 70.1311 10.3867 69.4711 9.8 68.4311C9.64 68.1644 9.46667 67.8778 9.28 67.5711C9.09333 67.2644 8.89333 67.1111 8.68 67.1111C8.52 67.1111 8.42 67.1711 8.38 67.2911C8.34 67.4111 8.32 67.5778 8.32 67.7911V75.1511C8.32 76.6178 8.44 77.9244 8.68 79.0711C8.76 79.4977 8.97333 80.2178 9.32 81.2311C9.48 81.7644 9.56 82.1778 9.56 82.4711C9.56 82.7111 9.49333 82.9044 9.36 83.0511ZM44.06 83.0311C43.6467 83.1911 43.08 83.2711 42.36 83.2711L37.56 83.1511L32.76 83.0711C31.1867 83.0711 30.0267 83.1044 29.28 83.1711C28.5333 83.2378 28.0133 83.2711 27.72 83.2711C27.4 83.2711 27.1 83.2178 26.82 83.1111C26.54 83.0044 26.4 82.8178 26.4 82.5511C26.4 81.7778 26.52 81.1644 26.76 80.7111C27.2933 79.6978 27.56 77.9644 27.56 75.5111V62.6711C27.56 61.0444 27.4667 59.8044 27.28 58.9511C27.04 58.0711 26.8 57.1778 26.56 56.2711C26.56 55.9511 26.6933 55.7044 26.96 55.5311C27.2267 55.3578 27.6533 55.2711 28.24 55.2711L31.12 55.3911C31.5733 55.3911 32.28 55.4044 33.24 55.4311C34.0933 55.4548 34.757 55.468 35.2311 55.4706L38.4 55.4711C39.2533 55.4711 40.12 55.4311 41 55.3511L42.68 55.2711C43.0533 55.2711 43.3533 55.3511 43.58 55.5111C43.8067 55.6711 43.92 55.9778 43.92 56.4311C43.92 56.7778 43.8933 57.2578 43.84 57.8711C43.7867 58.4844 43.76 59.0978 43.76 59.7111C43.76 59.8978 43.7733 60.1111 43.8 60.3511C43.8267 60.5911 43.8733 60.8778 43.94 61.2111C44.0067 61.5444 44.0667 61.8378 44.12 62.0911C44.1733 62.3444 44.2 62.5778 44.2 62.7911C44.2 63.6178 43.7733 64.0311 42.92 64.0311C42.5467 64.0311 42.1733 63.9244 41.8 63.7111C41.3733 63.4178 41.0667 63.2044 40.88 63.0711C39.8933 62.4044 38.8133 62.0711 37.64 62.0711C36.68 62.0711 35.96 62.2578 35.48 62.6311C35 63.0044 34.76 63.4578 34.76 63.9911C34.76 64.6044 35.04 65.0311 35.6 65.2711C36.16 65.5111 36.9333 65.6311 37.92 65.6311C38.32 65.6311 38.9933 65.6044 39.94 65.5511C40.8867 65.4978 41.3867 65.4711 41.44 65.4711C42.3733 65.4711 43.14 65.5844 43.74 65.8111C44.34 66.0378 44.64 66.4844 44.64 67.1511C44.64 67.6044 44.4067 67.9978 43.94 68.3311C43.4733 68.6644 42.68 68.8311 41.56 68.8311H36.4C35.84 68.8311 35.4267 68.9378 35.16 69.1511C34.8933 69.3644 34.76 69.8044 34.76 70.4711V76.5511C34.76 77.4044 35 77.9778 35.48 78.2711C35.8 78.4578 36.2933 78.5511 36.96 78.5511H37.48C38.3867 78.5511 39.1 78.5111 39.62 78.4311C40.14 78.3511 40.7733 78.1244 41.52 77.7511C41.84 77.5911 42.16 77.4177 42.48 77.2311C43.04 76.8844 43.4933 76.7111 43.84 76.7111C44.2133 76.7111 44.4667 76.8111 44.6 77.0111C44.7333 77.2111 44.8 77.4178 44.8 77.6311C44.8 77.8978 44.7667 78.2178 44.7 78.5911C44.6333 78.9644 44.6 79.4311 44.6 79.9911L44.68 81.9911C44.68 82.5244 44.4733 82.8711 44.06 83.0311ZM48.24 83.2711C48.4267 83.2711 48.8867 83.2511 49.62 83.2111C50.3533 83.1711 51.16 83.1511 52.04 83.1511C52.76 83.1511 53.4 83.1711 53.96 83.2111C54.52 83.2511 55.1067 83.2711 55.72 83.2711C55.96 83.2711 56.18 83.2244 56.38 83.1311C56.58 83.0378 56.68 82.8577 56.68 82.5911C56.3867 81.7911 56.0933 80.9777 55.8 80.1511C55.5333 79.2444 55.4 78.1911 55.4 76.9911V68.1111C55.4 67.6044 55.4467 67.2511 55.54 67.0511C55.6333 66.8511 55.7467 66.7511 55.88 66.7511C56.52 66.7511 57.4133 67.5111 58.56 69.0311C59.8133 70.6844 60.44 72.2178 60.44 73.6311V77.4711C60.44 79.2578 60.2933 80.3911 60 80.8711C59.7067 81.3511 59.56 81.8711 59.56 82.4311C59.56 82.7511 59.72 82.9911 60.04 83.1511C60.2267 83.2311 60.44 83.2711 60.68 83.2711C61.2667 83.2444 61.8333 83.2111 62.38 83.1711C62.9267 83.1311 63.52 83.1111 64.16 83.1111C64.5067 83.1111 65.04 83.1378 65.76 83.1911C66.48 83.2444 67.0933 83.2711 67.6 83.2711C67.84 83.2711 68.0533 83.2311 68.24 83.1511C68.4267 83.0711 68.52 82.8844 68.52 82.5911L67.88 80.1111C67.72 79.2578 67.64 78.0978 67.64 76.6311V62.7111C67.64 61.1911 67.7333 59.8978 67.92 58.8311C68.1067 57.7644 68.32 56.8044 68.56 55.9511C68.56 55.4978 68.24 55.2711 67.6 55.2711C66.8533 55.2711 66.2867 55.2911 65.9 55.3311C65.5133 55.3711 64.7867 55.3911 63.72 55.3911L59.84 55.2711C59.3333 55.2711 59.0133 55.3378 58.88 55.4711C58.7467 55.6044 58.68 55.7644 58.68 55.9511C58.68 56.0578 58.76 56.2044 58.92 56.3911C59.1867 56.6844 59.4067 56.9644 59.58 57.2311C59.7533 57.4978 59.92 57.8778 60.08 58.3711C60.24 58.8644 60.32 59.3644 60.32 59.8711V60.5111C60.32 60.6444 60.2533 60.7511 60.12 60.8311C60.0933 60.8311 60.04 60.8444 59.96 60.8711C59.8 60.8711 59.5067 60.6311 59.08 60.1511C58.36 59.3511 57.64 58.6178 56.92 57.9511C56.04 57.0978 55.3067 56.4711 54.72 56.0711C53.9467 55.5378 53.2667 55.2711 52.68 55.2711L51.48 55.3511L50.12 55.3911L48.4 55.3511L47.32 55.2711C46.7333 55.2711 46.44 55.5511 46.44 56.1111C46.44 56.4311 46.5067 56.7111 46.64 56.9511C47.2533 58.0978 47.6267 58.9244 47.76 59.4311C48.0533 60.4711 48.2 61.9778 48.2 63.9511V77.5511C48.2 78.3244 48.1467 78.9511 48.04 79.4311C47.9333 79.9111 47.76 80.4444 47.52 81.0311C47.2 81.8844 47.04 82.3778 47.04 82.5111C47.04 82.8577 47.1667 83.0711 47.42 83.1511C47.6733 83.2311 47.9467 83.2711 48.24 83.2711ZM86.62 81.7711C85.0867 82.9844 82.8133 83.5911 79.8 83.5911C76.3067 83.5911 73.8667 82.8178 72.48 81.2711C71.4933 80.1777 71 78.6178 71 76.5911V61.9511C71 61.4444 70.9733 60.7644 70.92 59.9111C70.8667 59.0578 70.8 58.4844 70.72 58.1911C70.64 57.8978 70.5267 57.5111 70.38 57.0311C70.2333 56.5511 70.16 56.1778 70.16 55.9111C70.16 55.4844 70.4267 55.2711 70.96 55.2711C71.3067 55.2711 71.8133 55.2911 72.48 55.3311C73.0726 55.3666 73.8232 55.3864 74.7319 55.3903L75.08 55.3911C75.96 55.3911 76.6267 55.3711 77.08 55.3311C77.5333 55.2911 78.0533 55.2711 78.64 55.2711C79.1467 55.2711 79.4 55.4844 79.4 55.9111C79.4 55.9911 79.3533 56.1644 79.26 56.4311C79.1667 56.6978 79.0733 57.0044 78.98 57.3511C78.8867 57.6978 78.8133 58.0311 78.76 58.3511C78.5467 59.3111 78.4 60.0244 78.32 60.4911C78.24 60.9578 78.2 61.6311 78.2 62.5111V75.1111C78.2 75.8844 78.32 76.4644 78.56 76.8511C78.8 77.2378 79.2533 77.4311 79.92 77.4311C80.72 77.4311 81.2533 77.1244 81.52 76.5111C81.6533 76.1911 81.72 75.7511 81.72 75.1911V61.1911C81.72 60.3911 81.7 59.7778 81.66 59.3511C81.62 58.9244 81.52 58.4578 81.36 57.9511C81.1733 57.4978 81.04 57.1644 80.96 56.9511C80.8 56.5511 80.72 56.2311 80.72 55.9911C80.72 55.7511 80.78 55.5711 80.9 55.4511C81.02 55.3311 81.24 55.2711 81.56 55.2711C82.2533 55.2711 82.8867 55.2844 83.46 55.3111C84.0333 55.3378 84.5867 55.3644 85.12 55.3911L85.6942 55.3901C86.694 55.3867 87.4026 55.3736 87.82 55.3511C88.3133 55.3244 88.7867 55.2978 89.24 55.2711C89.7733 55.2711 90.04 55.4844 90.04 55.9111C90.04 56.3911 89.9333 56.9111 89.72 57.4711C89.1867 58.8844 88.92 60.6711 88.92 62.8311V76.1911C88.92 78.6978 88.1533 80.5578 86.62 81.7711Z"
                              fill="black"/>
                        <path
                            d="M134.893 22.0794C134.893 21.385 134.705 20.7365 134.433 20.1207C131.246 20.5059 128.079 21.1 125.101 21.8833C125.099 21.9504 125.08 22.0124 125.08 22.0794C125.08 24.7844 127.282 26.986 129.987 26.986C132.691 26.986 134.893 24.7844 134.893 22.0794Z"
                            fill="black"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M174.143 26.5381C172.228 26.5381 170.386 26.1043 168.668 25.2463C167.315 24.5704 165.794 23.9571 164.2 23.3834C163.581 26.8192 160.584 29.4393 156.973 29.4393C152.914 29.4393 149.613 26.1376 149.613 22.0794V20.0593C147.135 19.7769 144.654 19.6191 142.25 19.6191C141.336 19.6191 140.403 19.6575 139.471 19.6996C139.666 20.4771 139.8 21.2713 139.8 22.0794C139.8 27.492 135.399 31.8925 129.987 31.8925C125.02 31.8925 120.95 28.1743 120.305 23.3821C118.715 23.9552 117.197 24.5672 115.846 25.2419C114.198 26.066 112.336 26.5049 110.463 26.5049C110.402 26.5049 110.343 26.4928 110.284 26.4806L110.284 26.4806C110.229 26.4693 110.174 26.4579 110.117 26.4564L115.267 36.0158V61.3318C115.267 65.3899 118.568 68.6916 122.627 68.6916C126.112 68.6916 129.037 66.2575 129.797 62.9992L140.092 82.4472C140.52 83.2425 141.35 83.7383 142.253 83.7383C143.156 83.7383 143.985 83.2425 144.414 82.4472L151.784 68.4316C151.083 68.5906 150.361 68.6916 149.613 68.6916C144.193 68.6916 139.8 64.2981 139.8 58.8785C139.8 53.459 144.193 49.0654 149.613 49.0654C153.82 49.0654 157.38 51.727 158.775 55.4478L174.358 26.5081C174.322 26.5087 174.287 26.5159 174.253 26.5231C174.217 26.5306 174.181 26.5381 174.143 26.5381ZM137.346 46.6121C133.288 46.6121 129.987 43.3105 129.987 39.2523C129.987 37.8966 131.084 36.7991 132.44 36.7991C133.796 36.7991 134.893 37.8966 134.893 39.2523C134.893 40.6061 135.993 41.7056 137.346 41.7056C138.7 41.7056 139.8 40.6061 139.8 39.2523C139.8 37.8966 140.897 36.7991 142.253 36.7991C143.609 36.7991 144.706 37.8966 144.706 39.2523C144.706 43.3105 141.405 46.6121 137.346 46.6121ZM149.613 36.7991C149.613 38.1541 150.711 39.2523 152.066 39.2523C153.42 39.2523 154.519 38.1541 154.519 36.7991C154.519 35.444 153.42 34.3458 152.066 34.3458C150.711 34.3458 149.613 35.444 149.613 36.7991Z"
                              fill="black"/>
                        <path
                            d="M149.613 53.972C146.908 53.972 144.706 56.1735 144.706 58.8785C144.706 61.5835 146.908 63.785 149.613 63.785C152.317 63.785 154.519 61.5835 154.519 58.8785C154.519 56.1735 152.317 53.972 149.613 53.972Z"
                            fill="black"/>
                        <path
                            d="M180.729 17.5607C182.542 13.9338 181.066 9.50387 177.437 7.68564C167.957 2.94456 154.478 0 142.26 0C130.035 0 116.551 2.94456 107.071 7.68564C103.439 9.50387 101.961 13.9313 103.777 17.5632C105.552 21.0969 110.097 22.6327 113.652 20.8528C121.115 17.1224 132.339 14.7126 142.25 14.7126C146.24 14.7126 150.435 15.1183 154.519 15.8281V22.0794C154.519 23.4345 155.618 24.5327 156.973 24.5327C158.327 24.5327 159.426 23.4345 159.426 22.0794V16.8573C163.66 17.8897 167.619 19.2377 170.853 20.8554C174.465 22.6525 178.883 21.2444 180.729 17.5607Z"
                            fill="black"/>
                    </svg>
                </div>
                <div className="Menu">
                    <p>
                        Меню
                    </p>
                </div>
                <div className="About">
                    <p>
                        О нас
                    </p>
                </div>
                <div className="Contacts">
                    <p>
                        Контакты
                    </p>
                </div>
                <div className="Phone">
                    <div className="Receiver">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path
                                d="M18.1629 30.4941C17.858 30.7986 17.858 31.2933 18.1629 31.5985C18.4683 31.9034 18.9627 31.9034 19.2673 31.5985C19.5728 31.2933 19.5728 30.7986 19.2673 30.4941C18.9627 30.1886 18.4683 30.1886 18.1629 30.4941Z"
                                fill="black"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M32.2653 24.0936L38.1967 29.1373C40.2609 30.4935 40.567 33.4097 38.8132 35.1639L36.6327 37.3441C33.2901 40.687 28.5675 40.4871 24.1278 38.8651C19.6423 37.226 14.7494 33.9008 10.3506 29.502C6.05345 25.2048 2.78868 20.4407 1.15782 16.0876C-0.746167 11.0059 -0.295118 6.86279 2.46184 4.10553L4.77385 1.79352C4.77446 1.79321 4.77507 1.7926 4.77538 1.79199L5.42296 1.14441C7.18474 -0.617065 10.1202 -0.301208 11.4679 1.78955L15.7513 7.742C15.7599 7.75421 15.7681 7.76642 15.776 7.77893C16.7666 9.33502 16.5475 11.333 15.2429 12.6376L12.0093 15.8722C11.7847 16.0962 11.7184 16.4297 11.8396 16.7227C11.8616 16.7755 11.8771 16.8295 11.8869 16.8839C11.969 17.1378 12.5915 18.9398 14.3185 21.2076C16.5832 24.1815 19.5831 26.4557 23.2348 27.9663C23.5278 28.0872 23.862 28.0209 24.086 27.7966L27.3199 24.563C28.6246 23.2587 30.6225 23.0392 32.1786 24.0298C32.2089 24.0491 32.2378 24.0704 32.2653 24.0936ZM37.2235 30.3604L31.2973 25.321C30.3696 24.7574 29.1952 24.8969 28.4247 25.6677L27.4386 26.6534L37.5464 34.2212L37.7081 34.0591C38.7674 33.0002 38.5757 31.2302 37.3099 30.4242C37.2797 30.405 37.2507 30.3836 37.2235 30.3604ZM10.1626 2.64801C10.1706 2.66052 10.1788 2.67304 10.1874 2.68494L14.469 8.63525C15.0506 9.56635 14.9161 10.755 14.1382 11.5329L13.1827 12.4887L6.34429 2.43256L6.5277 2.24915C7.59123 1.18561 9.35973 1.38672 10.1626 2.64801ZM11.4554 28.3972C15.6967 32.6386 20.3876 35.835 24.6637 37.3975C27.9068 38.5825 32.424 39.3436 35.5279 36.2393L36.4303 35.3372L26.3226 27.7695L25.1907 28.9017C24.5181 29.574 23.5162 29.7736 22.6376 29.4101C17.6379 27.3416 14.5804 24.1925 12.8958 21.9147C11.7511 20.3668 10.6164 18.2663 10.3699 17.2543C10.0424 16.3913 10.2487 15.4221 10.9048 14.7672L12.0581 13.6133L5.21971 3.55713L3.56658 5.21057C0.671069 8.10577 1.45384 12.4255 2.62053 15.5396C4.17479 19.6881 7.3123 24.2545 11.4554 28.3972Z"
                                  fill="black"/>
                            <path
                                d="M16.6968 28.6288C15.8716 27.9053 14.4443 26.6608 13.6926 25.8874C11.8493 23.9932 9.91544 21.6971 8.76554 20.0381C8.51988 19.6835 8.03312 19.595 7.67851 19.841C7.32389 20.0867 7.2357 20.5734 7.48136 20.928C8.93156 23.0203 11.0623 25.4245 12.5726 26.9766C13.3661 27.7933 14.8056 29.0488 15.6665 29.8035C15.9903 30.0873 16.4837 30.0561 16.7691 29.7311C17.0535 29.407 17.0212 28.9133 16.6968 28.6288Z"
                                fill="black"/>
                        </svg>
                    </div>
                    <div className="NO">
                        <div className="Number">
                            <p>
                                +7 (918) 432-65-87
                            </p>
                        </div>
                        <div className="OperationTime">
                            <p>
                                Ежедневно с 9:00 до 23:00
                            </p>
                        </div>
                    </div>
                </div>
                <div className="Order">
                    <div className="OrderLeft">
                        <div className="OrderPic">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"
                                 fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M27.2733 15.6113C26.7755 16.1093 26.1136 16.3834 25.4092 16.3834C24.7052 16.3834 24.0433 16.1093 23.5455 15.6113C23.0475 15.1135 22.7734 14.4516 22.7734 13.7476C22.7734 13.0435 23.0475 12.3816 23.5455 11.8835C24.5731 10.856 26.2454 10.856 27.2733 11.8835C27.771 12.3816 28.0453 13.0435 28.0453 13.7476C28.0453 14.4516 27.771 15.1135 27.2733 15.6113ZM25.4092 12.6746C25.1346 12.6746 24.8596 12.7792 24.6503 12.9886C24.4476 13.1912 24.3359 13.4607 24.3359 13.7476C24.3359 14.0341 24.4476 14.3039 24.6503 14.5065C24.8532 14.7092 25.1227 14.8209 25.4092 14.8209C25.6961 14.8209 25.9656 14.7092 26.1682 14.5065C26.3712 14.3039 26.4828 14.0341 26.4828 13.7476C26.4828 13.4607 26.3712 13.1912 26.1682 12.9886C25.9592 12.7792 25.6842 12.6746 25.4092 12.6746Z"
                                      fill="black"/>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M25.9247 21.4993C25.4614 21.9626 24.8526 22.1945 24.2438 22.1945C23.6352 22.1945 23.0264 21.9626 22.5632 21.4993C21.6363 20.5725 21.6363 19.0646 22.5632 18.1378C23.49 17.2113 24.9978 17.2113 25.9247 18.1378C26.8515 19.0646 26.8515 20.5725 25.9247 21.4993ZM24.2441 19.0045C24.0353 19.0045 23.8269 19.0839 23.6679 19.2426C23.3505 19.5602 23.3505 20.0769 23.6679 20.3946C23.9856 20.712 24.5025 20.7123 24.8199 20.3946C25.1376 20.0769 25.1376 19.5602 24.8199 19.2426C24.6612 19.0839 24.4525 19.0045 24.2441 19.0045Z"
                                      fill="black"/>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M20.1553 16.8488H19.0683C18.2211 16.8488 17.5317 16.1597 17.5317 15.3122V14.2255C17.5317 13.378 18.2211 12.6889 19.0683 12.6889H20.1553C21.0028 12.6889 21.6919 13.378 21.6919 14.2255V15.3122C21.6919 16.1597 21.0025 16.8488 20.1553 16.8488ZM20.1294 14.2514H19.0942V15.2863H20.1294V14.2514Z"
                                      fill="black"/>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M39.8727 33.7924L39.873 33.7924L39.8734 33.7921L34.9872 26.2921C34.8431 26.0712 34.5969 25.9375 34.3326 25.9375H27.8827L32.095 10.2173C32.3431 9.29077 32.0865 8.33252 31.4081 7.65411C30.73 6.97571 29.772 6.71906 28.8449 6.96747L10.3625 11.9199C9.38171 12.1826 8.57147 12.8604 8.13995 13.7793C7.70813 14.6985 7.70355 15.7547 8.12744 16.6776C9.74945 20.2069 12.0523 23.3481 14.8718 25.9375H6.36414V4.6875H33.5516V20.4688C33.5516 20.9003 33.9014 21.25 34.3329 21.25C34.7641 21.25 35.1141 20.9003 35.1141 20.4688V4.22974L36.2509 3.09326C36.3974 2.94647 36.4795 2.7478 36.4795 2.54059V0.78125C36.4795 0.349731 36.1298 0 35.6982 0H4.21722C3.78571 0 3.43597 0.349731 3.43597 0.78125V2.54059C3.43597 2.7478 3.51837 2.94647 3.66486 3.09326L4.80164 4.23004V26.4902L0.123291 33.7976H0.123901C0.0457764 33.9194 0 34.0637 0 34.2188V39.2188C0 39.6503 0.349731 40 0.78125 40H39.2188C39.6503 40 40 39.6503 40 39.2188V34.2188C40 34.0613 39.953 33.9151 39.8727 33.7924ZM29.2496 8.47656C29.3451 8.45093 29.4415 8.43842 29.537 8.43842C29.8212 8.43842 30.0946 8.55011 30.3036 8.75916C30.5823 9.03809 30.6879 9.43207 30.5859 9.81293L26.1322 26.434C25.64 26.0175 25.0034 25.7657 24.3088 25.7657H24.0546C23.219 25.7657 22.5394 25.09 22.5394 24.2599C22.5394 22.5681 21.1588 21.1917 19.4617 21.1917C18.6261 21.1917 17.9462 20.5161 17.9462 19.6857C17.9462 17.9938 16.5656 16.6174 14.8685 16.6174C14.0329 16.6174 13.3533 15.9421 13.3533 15.1117C13.3533 14.2795 13.0188 13.5242 12.4774 12.9709L29.2496 8.47656ZM9.55444 14.4437C9.31885 14.9454 9.31641 15.5215 9.54773 16.0251C12.2864 21.9855 17.077 26.7761 23.0371 29.5145C23.5406 29.7461 24.1171 29.7437 24.6185 29.5081C25.0546 29.3033 25.3909 28.9423 25.5655 28.4995C25.5231 27.8467 24.9762 27.3279 24.3085 27.3279H24.0543C22.3572 27.3279 20.9766 25.9515 20.9766 24.2596C20.9766 23.4293 20.2966 22.7539 19.4611 22.7539C17.764 22.7539 16.3834 21.3776 16.3834 19.6857C16.3834 18.8553 15.7037 18.1796 14.8682 18.1796C13.1711 18.1796 11.7902 16.8033 11.7902 15.1114C11.7902 14.2993 11.1398 13.6374 10.3296 13.6084C9.9939 13.7976 9.72168 14.0872 9.55444 14.4437ZM4.99847 1.5625H34.917V2.2171L34.0091 3.125H5.90637L4.99847 2.2171V1.5625ZM3.28125 31.875C3.25775 31.875 3.23456 31.8735 3.21167 31.8713L2.20917 33.4375H37.7774L33.9093 27.5H27.4643L27.1426 28.6996C26.8799 29.6805 26.2021 30.4907 25.2832 30.9222C24.819 31.1404 24.3201 31.2494 23.8208 31.2494C23.3316 31.2494 22.8421 31.1447 22.3853 30.9348C20.3598 30.004 18.4631 28.848 16.7242 27.5H6.01013L4.20959 30.3125H14.1437C14.5752 30.3125 14.9249 30.6622 14.9249 31.0938C14.9249 31.5253 14.5752 31.875 14.1437 31.875H3.28125ZM21.2598 35C20.9976 35.4211 20.5316 35.7031 20 35.7031C19.4684 35.7031 19.0024 35.4211 18.7402 35H21.2598ZM1.5625 35V38.4375H38.4375V35H22.9449C22.5989 36.3028 21.4102 37.2656 20 37.2656C18.5898 37.2656 17.4008 36.3028 17.0551 35H1.5625Z"
                                      fill="black"/>
                                <path
                                    d="M18.0499 31.0938C18.0499 30.8884 17.9663 30.6866 17.821 30.5414C17.6758 30.3961 17.4744 30.3125 17.2687 30.3125C17.0633 30.3125 16.8616 30.3961 16.7163 30.5414C16.571 30.6866 16.4874 30.8884 16.4874 31.0938C16.4874 31.2991 16.571 31.5009 16.7163 31.6461C16.8616 31.7914 17.0633 31.875 17.2687 31.875C17.4744 31.875 17.6758 31.7914 17.821 31.6461C17.9663 31.5009 18.0499 31.2991 18.0499 31.0938Z"
                                    fill="black"/>
                                <path
                                    d="M34.3329 22.8125C34.1272 22.8125 33.9258 22.8961 33.7805 23.0414C33.6353 23.1866 33.5516 23.3884 33.5516 23.5938C33.5516 23.7991 33.6353 24.0009 33.7805 24.1461C33.9258 24.2914 34.1272 24.375 34.3329 24.375C34.5383 24.375 34.74 24.2914 34.8853 24.1461C35.0305 24.0009 35.1141 23.7991 35.1141 23.5938C35.1141 23.3884 35.0305 23.1866 34.8853 23.0414C34.74 22.8961 34.5383 22.8125 34.3329 22.8125Z"
                                    fill="black"/>
                            </svg>
                        </div>
                        <div className="OrderNumber">
                            <rect className="OrderNumberRect">
                                3
                            </rect>
                        </div>
                    </div>
                    <div className="OrderRight">
                        <div className="OrderYour">
                        <p>
                            Ваш заказ
                        </p>
                        </div>
                        <div className="OrderContain">
                            <p>
                                Итальянская и ещё 2 пиццы
                            </p>
                        </div>
                    </div>
                </div>
                <div className="English">
                    <rect className="EnglishRect">
                        EN
                    </rect>
                </div>
            </div>
        </div>
    );
}