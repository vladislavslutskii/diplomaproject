import React from "react";

export const HeadLogo = ({ width = "167", height = "56" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 167 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 4.66667C0 2.08934 2.08934 0 4.66667 0L160.905 0C163.978 0 166.212 2.91767 165.41 5.88378L152.803 52.5504C152.253 54.586 150.406 56 148.298 56H4.66667C2.08934 56 0 53.9107 0 51.3333V4.66667Z"
        fill="url(#paint0_linear_3_3170)"
      />
      <path
        d="M14.3669 35.1666V21.5908H20.0279C21.0443 21.5908 21.895 21.7344 22.58 22.0217C23.2694 22.3089 23.7864 22.7111 24.1311 23.2281C24.4803 23.7452 24.6548 24.344 24.6548 25.0245C24.6548 25.5416 24.5465 26.0034 24.33 26.4099C24.1135 26.8121 23.8152 27.1457 23.4351 27.4109C23.0551 27.676 22.6154 27.8616 22.116 27.9677V28.1003C22.664 28.1268 23.17 28.2748 23.634 28.5444C24.1024 28.814 24.478 29.1896 24.7609 29.6713C25.0437 30.1486 25.1851 30.7142 25.1851 31.3683C25.1851 32.0974 24.9995 32.7493 24.6283 33.3238C24.2571 33.8938 23.7202 34.3446 23.0175 34.676C22.3148 35.0031 21.4619 35.1666 20.4588 35.1666H14.3669ZM17.6482 32.5217H19.6766C20.3881 32.5217 20.9118 32.3869 21.2476 32.1173C21.5879 31.8478 21.758 31.4721 21.758 30.9904C21.758 30.6413 21.6763 30.3408 21.5128 30.0889C21.3493 29.8326 21.1172 29.6359 20.8167 29.4989C20.5162 29.3575 20.1561 29.2868 19.7362 29.2868H17.6482V32.5217ZM17.6482 27.1722H19.4645C19.8224 27.1722 20.1406 27.1126 20.419 26.9933C20.6974 26.8739 20.914 26.7016 21.0686 26.4762C21.2277 26.2508 21.3073 25.9791 21.3073 25.6609C21.3073 25.2057 21.146 24.8477 20.8234 24.587C20.5008 24.3263 20.0655 24.1959 19.5175 24.1959H17.6482V27.1722ZM27.3228 35.1666V21.5908H30.604V32.5018H36.2518V35.1666H27.3228ZM50.7952 28.3787C50.7952 29.8724 50.5079 31.1385 49.9334 32.177C49.3589 33.2155 48.5812 34.0043 47.6001 34.5435C46.6235 35.0826 45.5275 35.3522 44.3122 35.3522C43.0925 35.3522 41.9944 35.0804 41.0177 34.5368C40.0411 33.9933 39.2655 33.2044 38.691 32.1704C38.1209 31.1318 37.8359 29.868 37.8359 28.3787C37.8359 26.885 38.1209 25.6189 38.691 24.5804C39.2655 23.5419 40.0411 22.753 41.0177 22.2139C41.9944 21.6748 43.0925 21.4052 44.3122 21.4052C45.5275 21.4052 46.6235 21.6748 47.6001 22.2139C48.5812 22.753 49.3589 23.5419 49.9334 24.5804C50.5079 25.6189 50.7952 26.885 50.7952 28.3787ZM47.441 28.3787C47.441 27.4948 47.3151 26.748 47.0632 26.1382C46.8157 25.5283 46.4577 25.0665 45.9893 24.7527C45.5253 24.439 44.9663 24.2821 44.3122 24.2821C43.6626 24.2821 43.1036 24.439 42.6351 24.7527C42.1667 25.0665 41.8065 25.5283 41.5547 26.1382C41.3072 26.748 41.1834 27.4948 41.1834 28.3787C41.1834 29.2625 41.3072 30.0094 41.5547 30.6192C41.8065 31.2291 42.1667 31.6909 42.6351 32.0046C43.1036 32.3184 43.6626 32.4753 44.3122 32.4753C44.9663 32.4753 45.5253 32.3184 45.9893 32.0046C46.4577 31.6909 46.8157 31.2291 47.0632 30.6192C47.3151 30.0094 47.441 29.2625 47.441 28.3787ZM62.18 26.0255C62.1049 25.7471 61.9944 25.5018 61.8486 25.2897C61.7027 25.0731 61.5238 24.8897 61.3116 24.7395C61.0995 24.5892 60.8565 24.4765 60.5825 24.4014C60.3085 24.3219 60.008 24.2821 59.6809 24.2821C59.0225 24.2821 58.4524 24.4412 57.9707 24.7594C57.4934 25.0775 57.1244 25.5416 56.8637 26.1514C56.603 26.7568 56.4726 27.4926 56.4726 28.3588C56.4726 29.2294 56.5986 29.9718 56.8505 30.5861C57.1023 31.2003 57.4669 31.6688 57.9442 31.9914C58.4215 32.314 59.0004 32.4753 59.6809 32.4753C60.282 32.4753 60.7902 32.3781 61.2056 32.1836C61.6254 31.9847 61.9436 31.7041 62.1601 31.3418C62.3767 30.9794 62.4849 30.5529 62.4849 30.0624L63.0948 30.1353H59.7936V27.7423H65.6469V29.5387C65.6469 30.754 65.3883 31.7947 64.8713 32.6609C64.3587 33.527 63.6516 34.1921 62.7501 34.6561C61.853 35.1202 60.8211 35.3522 59.6544 35.3522C58.3596 35.3522 57.2217 35.0716 56.2406 34.5103C55.2595 33.9491 54.495 33.1492 53.947 32.1107C53.3991 31.0678 53.1251 29.8304 53.1251 28.3986C53.1251 27.2849 53.2908 26.2972 53.6222 25.4355C53.9537 24.5693 54.4155 23.8358 55.0076 23.2347C55.6042 22.6337 56.2936 22.1786 57.0758 21.8692C57.8624 21.5599 58.7087 21.4052 59.6147 21.4052C60.4013 21.4052 61.1327 21.5179 61.8088 21.7433C62.4893 21.9686 63.0904 22.2868 63.6118 22.6978C64.1377 23.1088 64.5642 23.5971 64.8912 24.1628C65.2182 24.7284 65.4215 25.3493 65.501 26.0255H62.18ZM80.9543 28.3787C80.9543 29.8724 80.667 31.1385 80.0925 32.177C79.518 33.2155 78.7402 34.0043 77.7592 34.5435C76.7825 35.0826 75.6866 35.3522 74.4713 35.3522C73.2516 35.3522 72.1534 35.0804 71.1768 34.5368C70.2001 33.9933 69.4246 33.2044 68.8501 32.1704C68.28 31.1318 67.995 29.868 67.995 28.3787C67.995 26.885 68.28 25.6189 68.8501 24.5804C69.4246 23.5419 70.2001 22.753 71.1768 22.2139C72.1534 21.6748 73.2516 21.4052 74.4713 21.4052C75.6866 21.4052 76.7825 21.6748 77.7592 22.2139C78.7402 22.753 79.518 23.5419 80.0925 24.5804C80.667 25.6189 80.9543 26.885 80.9543 28.3787ZM77.6001 28.3787C77.6001 27.4948 77.4741 26.748 77.2222 26.1382C76.9748 25.5283 76.6168 25.0665 76.1484 24.7527C75.6844 24.439 75.1253 24.2821 74.4713 24.2821C73.8217 24.2821 73.2627 24.439 72.7942 24.7527C72.3258 25.0665 71.9656 25.5283 71.7137 26.1382C71.4662 26.748 71.3425 27.4948 71.3425 28.3787C71.3425 29.2625 71.4662 30.0094 71.7137 30.6192C71.9656 31.2291 72.3258 31.6909 72.7942 32.0046C73.2627 32.3184 73.8217 32.4753 74.4713 32.4753C75.1253 32.4753 75.6844 32.3184 76.1484 32.0046C76.6168 31.6909 76.9748 31.2291 77.2222 30.6192C77.4741 30.0094 77.6001 29.2625 77.6001 28.3787ZM83.43 35.1666V21.5908H86.7112V32.5018H92.359V35.1666H83.43ZM106.902 28.3787C106.902 29.8724 106.615 31.1385 106.041 32.177C105.466 33.2155 104.688 34.0043 103.707 34.5435C102.731 35.0826 101.635 35.3522 100.419 35.3522C99.1997 35.3522 98.1016 35.0804 97.1249 34.5368C96.1483 33.9933 95.3727 33.2044 94.7982 32.1704C94.2281 31.1318 93.9431 29.868 93.9431 28.3787C93.9431 26.885 94.2281 25.6189 94.7982 24.5804C95.3727 23.5419 96.1483 22.753 97.1249 22.2139C98.1016 21.6748 99.1997 21.4052 100.419 21.4052C101.635 21.4052 102.731 21.6748 103.707 22.2139C104.688 22.753 105.466 23.5419 106.041 24.5804C106.615 25.6189 106.902 26.885 106.902 28.3787ZM103.548 28.3787C103.548 27.4948 103.422 26.748 103.17 26.1382C102.923 25.5283 102.565 25.0665 102.097 24.7527C101.633 24.439 101.073 24.2821 100.419 24.2821C99.7698 24.2821 99.2108 24.439 98.7424 24.7527C98.2739 25.0665 97.9138 25.5283 97.6619 26.1382C97.4144 26.748 97.2906 27.4948 97.2906 28.3787C97.2906 29.2625 97.4144 30.0094 97.6619 30.6192C97.9138 31.2291 98.2739 31.6909 98.7424 32.0046C99.2108 32.3184 99.7698 32.4753 100.419 32.4753C101.073 32.4753 101.633 32.3184 102.097 32.0046C102.565 31.6909 102.923 31.2291 103.17 30.6192C103.422 30.0094 103.548 29.2625 103.548 28.3787ZM118.287 26.0255C118.212 25.7471 118.102 25.5018 117.956 25.2897C117.81 25.0731 117.631 24.8897 117.419 24.7395C117.207 24.5892 116.964 24.4765 116.69 24.4014C116.416 24.3219 116.115 24.2821 115.788 24.2821C115.13 24.2821 114.56 24.4412 114.078 24.7594C113.601 25.0775 113.232 25.5416 112.971 26.1514C112.71 26.7568 112.58 27.4926 112.58 28.3588C112.58 29.2294 112.706 29.9718 112.958 30.5861C113.21 31.2003 113.574 31.6688 114.051 31.9914C114.529 32.314 115.108 32.4753 115.788 32.4753C116.389 32.4753 116.897 32.3781 117.313 32.1836C117.733 31.9847 118.051 31.7041 118.267 31.3418C118.484 30.9794 118.592 30.5529 118.592 30.0624L119.202 30.1353H115.901V27.7423H121.754V29.5387C121.754 30.754 121.496 31.7947 120.979 32.6609C120.466 33.527 119.759 34.1921 118.857 34.6561C117.96 35.1202 116.928 35.3522 115.762 35.3522C114.467 35.3522 113.329 35.0716 112.348 34.5103C111.367 33.9491 110.602 33.1492 110.054 32.1107C109.506 31.0678 109.232 29.8304 109.232 28.3986C109.232 27.2849 109.398 26.2972 109.729 25.4355C110.061 24.5693 110.523 23.8358 111.115 23.2347C111.711 22.6337 112.401 22.1786 113.183 21.8692C113.97 21.5599 114.816 21.4052 115.722 21.4052C116.508 21.4052 117.24 21.5179 117.916 21.7433C118.597 21.9686 119.198 22.2868 119.719 22.6978C120.245 23.1088 120.671 23.5971 120.998 24.1628C121.325 24.7284 121.529 25.3493 121.608 26.0255H118.287ZM137.061 28.3787C137.061 29.8724 136.774 31.1385 136.2 32.177C135.625 33.2155 134.847 34.0043 133.866 34.5435C132.89 35.0826 131.794 35.3522 130.579 35.3522C129.359 35.3522 128.261 35.0804 127.284 34.5368C126.307 33.9933 125.532 33.2044 124.957 32.1704C124.387 31.1318 124.102 29.868 124.102 28.3787C124.102 26.885 124.387 25.6189 124.957 24.5804C125.532 23.5419 126.307 22.753 127.284 22.2139C128.261 21.6748 129.359 21.4052 130.579 21.4052C131.794 21.4052 132.89 21.6748 133.866 22.2139C134.847 22.753 135.625 23.5419 136.2 24.5804C136.774 25.6189 137.061 26.885 137.061 28.3787ZM133.707 28.3787C133.707 27.4948 133.581 26.748 133.329 26.1382C133.082 25.5283 132.724 25.0665 132.256 24.7527C131.792 24.439 131.233 24.2821 130.579 24.2821C129.929 24.2821 129.37 24.439 128.901 24.7527C128.433 25.0665 128.073 25.5283 127.821 26.1382C127.573 26.748 127.45 27.4948 127.45 28.3787C127.45 29.2625 127.573 30.0094 127.821 30.6192C128.073 31.2291 128.433 31.6909 128.901 32.0046C129.37 32.3184 129.929 32.4753 130.579 32.4753C131.233 32.4753 131.792 32.3184 132.256 32.0046C132.724 31.6909 133.082 31.2291 133.329 30.6192C133.581 30.0094 133.707 29.2625 133.707 28.3787Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3_3170"
          x1="-12.9669"
          y1="-6.64031"
          x2="32.5425"
          y2="111.545"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4D0AC7" />
          <stop offset="1" stopColor="#912EF2" />
        </linearGradient>
      </defs>
    </svg>
  );
};