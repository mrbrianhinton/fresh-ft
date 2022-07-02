/** @jsx h */
import { h, Fragment } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers<Project> = {
  async GET(__req, ctx) {
    // get our data
    const rawLinks = fetch("");
    const links = await (await rawLinks).json()
    return ctx.render(links.records);
  }
}

export default function Home(props: PageProps) {
  console.log(props.data)
  const sliceLink = props.data.slice(0, 6);

  return (
    <Fragment>
      <div class={tw`w-full border-gray-900 border-b-4`}
      style="background: url('/halftone.png'), #FFF2CC;
      background-repeat: repeat;">
        <nav class={tw`pt-8 mb-24 max-w-5xl mx-auto flex justify-between`}>
          <h1 class={tw`uppercase text-2xl font-bold`}>FigmaLinks</h1>
          <ul class={tw`flex gap-x-8 uppercase`}>
            <li><a href="/" aria-current="page" class={tw`font-bold hover:underline`}>Home</a></li>
            <li><a href="/all-links" class={tw`hover:underline`}>All Links</a></li>
          </ul>
          <p class={tw`hidden sm:inline-block`}>Made with <span class={tw`sr-only`}>love</span> <img src="/love.svg" class={tw`w-6 h-6 inline`} alt=""/> in Florida.</p>
        </nav>
        <section class={tw`max-w-5xl mx-auto flex mb-20`}>
          <div>
          <h2 class={tw`my-6 text-6xl max-w-md`}>
            Browse Figma bookmarks for education, presentation, meetups and more.
          </h2>
          <a class={tw`text-2xl underline relative`} href="#recent">
            Start Exploring <span class={tw`absolute -top-1`}><svg class={tw`inline`} aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.3333 16H26.6666L15.9999 26.6667L5.33325 16H14.6666V5.33337H17.3333V16Z" fill="#151414"/>
</svg></span>
          </a>
          </div>
          <svg class={tw`hidden sm:block`} width="573" height="493" viewBox="0 0 573 493" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="497.483" cy="422.5" rx="49" ry="48.5" fill="#2D67BE"/>
            <g filter="url(#filter0_d_22_370)">
            <circle cx="359" cy="124" r="40" fill="#BE2D2D"/>
            </g>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M359 160C378.882 160 395 143.882 395 124C395 104.118 378.882 88 359 88C339.118 88 323 104.118 323 124C323 143.882 339.118 160 359 160ZM359 164C381.091 164 399 146.091 399 124C399 101.909 381.091 84 359 84C336.909 84 319 101.909 319 124C319 146.091 336.909 164 359 164Z" fill="#151414"/>
            <circle cx="248" cy="16" r="16" fill="#2D67BE"/>
            <circle cx="42.3848" cy="52.4276" r="28" fill="#BE2D2D"/>
            <path d="M201 195.469L477 471H201L201 195.469Z" fill="#FFC71F"/>
            <path d="M153.405 102.863L380.051 285.688L353.555 318.535L126.909 135.71L153.405 102.863Z" fill="#2D67BE"/>
            <path d="M94.8798 131.002L41.8419 471.173L0.144292 464.671L53.1821 124.501L94.8798 131.002Z" fill="#BE2D2D"/>
            <g filter="url(#filter1_d_22_370)">
            <rect x="56" y="379.925" width="106" height="106" transform="rotate(-30.5788 56 379.925)" fill="#2D67BE"/>
            </g>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M147.71 323.561L202.774 416.482L199.333 418.521L146.301 329.03L56.813 381.646L54.7856 378.197L147.71 323.561Z" fill="#151414"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M109.343 473.94L54.2794 381.02L57.7206 378.98L110.752 468.472L200.24 415.856L202.268 419.304L109.343 473.94Z" fill="#151414"/>
            <g filter="url(#filter2_d_22_370)">
            <path d="M14 90.5204L296.102 22.7219L305.964 63.7549L23.8616 131.553L14 90.5204Z" fill="#FFC71F"/>
            </g>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5881 89.0431L297.579 20.3098L308.376 65.2321L22.3845 133.965L11.5881 89.0431ZM16.4121 91.9976L25.339 129.141L303.552 62.2776L294.625 25.1338L16.4121 91.9976Z" fill="#151414"/>
            <rect x="192.349" y="415.078" width="12" height="12" transform="rotate(-30.796 192.349 415.078)" fill="#FAFAFA"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M186.865 413.69L204.045 403.45L214.285 420.63L197.105 430.87L186.865 413.69ZM192.349 415.078L198.493 425.386L208.801 419.242L202.657 408.934L192.349 415.078Z" fill="#151414"/>
            <rect x="296.555" y="58.6458" width="16" height="16" transform="rotate(-14.813 296.555 58.6458)" fill="#FAFAFA" stroke="#151414" stroke-width="4"/>
            <g filter="url(#filter3_d_22_370)">
            <rect x="387.667" y="194.963" width="172" height="172" transform="rotate(4.90404 387.667 194.963)" fill="#BE2D2D"/>
            </g>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M554.71 213.31L391.31 199.29L377.29 362.69L540.69 376.71L554.71 213.31ZM387.667 194.963L372.963 366.333L544.333 381.037L559.037 209.667L387.667 194.963Z" fill="#151414"/>
            <rect x="384.023" y="190.636" width="12" height="12" transform="rotate(4.90404 384.023 190.636)" fill="#FAFAFA"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M380.38 186.308L400.307 188.018L398.597 207.945L378.67 206.235L380.38 186.308ZM384.023 190.636L382.998 202.592L394.954 203.618L395.979 191.662L384.023 190.636Z" fill="#151414"/>
            <rect x="369.662" y="358.021" width="12" height="12" transform="rotate(4.90404 369.662 358.021)" fill="#FAFAFA"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M366.018 353.693L385.945 355.403L384.235 375.33L364.308 373.62L366.018 353.693ZM369.662 358.021L368.636 369.977L380.592 371.003L381.618 359.047L369.662 358.021Z" fill="#151414"/>
            <rect x="551.408" y="204.997" width="12" height="12" transform="rotate(4.90404 551.408 204.997)" fill="#FAFAFA"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M547.765 200.67L567.692 202.38L565.982 222.307L546.055 220.597L547.765 200.67ZM551.408 204.997L550.383 216.954L562.339 217.979L563.364 206.023L551.408 204.997Z" fill="#151414"/>
            <rect x="537.047" y="372.382" width="12" height="12" transform="rotate(4.90404 537.047 372.382)" fill="#FAFAFA"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M533.403 368.055L553.33 369.765L551.62 389.692L531.693 387.982L533.403 368.055ZM537.047 372.382L536.021 384.339L547.977 385.364L549.003 373.408L537.047 372.382Z" fill="#151414"/>
            <rect x="14.5551" y="126.646" width="16" height="16" transform="rotate(-14.813 14.5551 126.646)" fill="#FAFAFA" stroke="#151414" stroke-width="4"/>
            <rect x="4.55514" y="85.6458" width="16" height="16" transform="rotate(-14.813 4.55514 85.6458)" fill="#FAFAFA" stroke="#151414" stroke-width="4"/>
            <rect x="286.555" y="17.6458" width="16" height="16" transform="rotate(-14.813 286.555 17.6458)" fill="#FAFAFA" stroke="#151414" stroke-width="4"/>
            <rect x="47.5615" y="377.849" width="12" height="12" transform="rotate(-30.7069 47.5615 377.849)" fill="#FAFAFA"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M42.0798 376.452L59.2756 366.239L69.4886 383.435L52.2928 393.648L42.0798 376.452ZM47.5616 377.849L53.6893 388.166L64.0068 382.038L57.8791 371.721L47.5616 377.849Z" fill="#151414"/>
            <rect x="102" y="469.128" width="12" height="12" transform="rotate(-30.7069 102 469.128)" fill="#FAFAFA"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M96.5183 467.731L113.714 457.518L123.927 474.714L106.731 484.927L96.5183 467.731ZM102 469.128L108.128 479.445L118.445 473.317L112.318 463L102 469.128Z" fill="#151414"/>
            <rect x="139" y="324.128" width="12" height="12" transform="rotate(-30.7069 139 324.128)" fill="#FAFAFA"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M133.518 322.731L150.714 312.518L160.927 329.714L143.731 339.927L133.518 322.731ZM139 324.128L145.128 334.445L155.445 328.317L149.318 318L139 324.128Z" fill="#151414"/>
            <mask id="path-36-inside-1_22_370" fill="white">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M374.744 136.197L377.603 178.147L387.097 170.54L392.471 180.138L402.941 174.275L397.567 164.677L409.015 160.56L374.744 136.197Z"/>
            </mask>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M374.744 136.197L377.603 178.147L387.097 170.54L392.471 180.138L402.941 174.275L397.567 164.677L409.015 160.56L374.744 136.197Z" fill="#FAFAFA"/>
            <path d="M377.603 178.147L373.612 178.419L374.133 186.054L380.104 181.269L377.603 178.147ZM374.744 136.197L377.062 132.937L370.179 128.044L370.754 136.469L374.744 136.197ZM387.097 170.54L390.587 168.585L388.28 164.465L384.595 167.418L387.097 170.54ZM392.471 180.138L388.98 182.092L390.935 185.582L394.425 183.628L392.471 180.138ZM402.941 174.275L404.895 177.765L408.385 175.811L406.431 172.321L402.941 174.275ZM397.567 164.677L396.213 160.913L391.77 162.511L394.077 166.631L397.567 164.677ZM409.015 160.56L410.368 164.324L417.569 161.733L411.332 157.299L409.015 160.56ZM381.594 177.875L378.735 135.925L370.754 136.469L373.612 178.419L381.594 177.875ZM384.595 167.418L375.102 175.026L380.104 181.269L389.598 173.661L384.595 167.418ZM395.961 178.183L390.587 168.585L383.606 172.494L388.98 182.092L395.961 178.183ZM400.987 170.785L390.516 176.647L394.425 183.628L404.895 177.765L400.987 170.785ZM394.077 166.631L399.451 176.229L406.431 172.321L401.057 162.723L394.077 166.631ZM407.661 156.796L396.213 160.913L398.921 168.441L410.368 164.324L407.661 156.796ZM372.427 139.457L406.697 163.82L411.332 157.299L377.062 132.937L372.427 139.457Z" fill="#151414" mask="url(#path-36-inside-1_22_370)"/>
            <path d="M375 124L351 109L351 139L375 124Z" fill="#FAFAFA" stroke="#151414" stroke-width="4"/>
            <mask id="path-39-inside-2_22_370" fill="white">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M481.706 347.728L484.565 389.678L494.058 382.07L499.432 391.668L509.902 385.806L504.528 376.208L515.976 372.09L481.706 347.728Z"/>
            </mask>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M481.706 347.728L484.565 389.678L494.058 382.07L499.432 391.668L509.902 385.806L504.528 376.208L515.976 372.09L481.706 347.728Z" fill="#FAFAFA"/>
            <path d="M484.565 389.678L480.574 389.95L481.094 397.585L487.066 392.799L484.565 389.678ZM481.706 347.728L484.023 344.468L477.141 339.575L477.715 348L481.706 347.728ZM494.058 382.07L497.548 380.116L495.241 375.996L491.557 378.949L494.058 382.07ZM499.432 391.668L495.942 393.623L497.896 397.113L501.386 395.159L499.432 391.668ZM509.902 385.806L511.857 389.296L515.347 387.342L513.393 383.852L509.902 385.806ZM504.528 376.208L503.175 372.444L498.731 374.042L501.038 378.162L504.528 376.208ZM515.976 372.09L517.33 375.854L524.531 373.264L518.294 368.83L515.976 372.09ZM488.555 389.406L485.696 347.456L477.715 348L480.574 389.95L488.555 389.406ZM491.557 378.949L482.063 386.557L487.066 392.799L496.559 385.192L491.557 378.949ZM502.922 389.714L497.548 380.116L490.568 384.025L495.942 393.623L502.922 389.714ZM507.948 382.316L497.478 388.178L501.386 395.159L511.857 389.296L507.948 382.316ZM501.038 378.162L506.412 387.76L513.393 383.852L508.019 374.254L501.038 378.162ZM514.622 368.327L503.175 372.444L505.882 379.972L517.33 375.854L514.622 368.327ZM479.388 350.988L513.658 375.351L518.294 368.83L484.023 344.468L479.388 350.988Z" fill="#151414" mask="url(#path-39-inside-2_22_370)"/>
            <mask id="path-41-inside-3_22_370" fill="white">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M44.7057 102.794L47.5645 144.744L57.058 137.136L62.4319 146.734L72.9024 140.872L67.5284 131.274L78.976 127.156L44.7057 102.794Z"/>
            </mask>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M44.7057 102.794L47.5645 144.744L57.058 137.136L62.4319 146.734L72.9024 140.872L67.5284 131.274L78.976 127.156L44.7057 102.794Z" fill="#FAFAFA"/>
            <path d="M47.5645 144.744L43.5738 145.016L44.0941 152.651L50.0659 147.865L47.5645 144.744ZM44.7057 102.794L47.0234 99.5335L40.1409 94.6407L40.715 103.066L44.7057 102.794ZM57.058 137.136L60.5481 135.182L58.2413 131.062L54.5566 134.015L57.058 137.136ZM62.4319 146.734L58.9418 148.688L60.8959 152.179L64.3861 150.224L62.4319 146.734ZM72.9024 140.872L74.8566 144.362L78.3468 142.408L76.3926 138.918L72.9024 140.872ZM67.5284 131.274L66.1746 127.51L61.7315 129.108L64.0383 133.228L67.5284 131.274ZM78.976 127.156L80.3298 130.92L87.5309 128.33L81.2936 123.896L78.976 127.156ZM51.5553 144.472L48.6965 102.522L40.715 103.066L43.5738 145.016L51.5553 144.472ZM54.5566 134.015L45.0632 141.622L50.0659 147.865L59.5593 140.258L54.5566 134.015ZM65.9221 144.78L60.5481 135.182L53.5678 139.09L58.9418 148.688L65.9221 144.78ZM70.9483 137.382L60.4778 143.244L64.3861 150.224L74.8566 144.362L70.9483 137.382ZM64.0383 133.228L69.4123 142.826L76.3926 138.918L71.0186 129.32L64.0383 133.228ZM77.6222 123.392L66.1746 127.51L68.8822 135.038L80.3298 130.92L77.6222 123.392ZM42.3881 106.054L76.6584 130.417L81.2936 123.896L47.0234 99.5335L42.3881 106.054Z" fill="#151414" mask="url(#path-41-inside-3_22_370)"/>
            <mask id="path-43-inside-4_22_370" fill="white">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M152.132 413.197L154.991 455.147L164.484 447.54L169.858 457.138L180.329 451.275L174.955 441.677L186.402 437.56L152.132 413.197Z"/>
            </mask>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M152.132 413.197L154.991 455.147L164.484 447.54L169.858 457.138L180.329 451.275L174.955 441.677L186.402 437.56L152.132 413.197Z" fill="#FAFAFA"/>
            <path d="M154.991 455.147L151 455.419L151.52 463.054L157.492 458.269L154.991 455.147ZM152.132 413.197L154.45 409.937L147.567 405.044L148.141 413.469L152.132 413.197ZM164.484 447.54L167.975 445.585L165.668 441.465L161.983 444.418L164.484 447.54ZM169.858 457.138L166.368 459.092L168.322 462.582L171.812 460.628L169.858 457.138ZM180.329 451.275L182.283 454.765L185.773 452.811L183.819 449.321L180.329 451.275ZM174.955 441.677L173.601 437.913L169.158 439.511L171.465 443.631L174.955 441.677ZM186.402 437.56L187.756 441.324L194.957 438.733L188.72 434.299L186.402 437.56ZM158.982 454.875L156.123 412.925L148.141 413.469L151 455.419L158.982 454.875ZM161.983 444.418L152.49 452.026L157.492 458.269L166.986 450.661L161.983 444.418ZM173.348 455.183L167.975 445.585L160.994 449.494L166.368 459.092L173.348 455.183ZM178.375 447.785L167.904 453.647L171.812 460.628L182.283 454.765L178.375 447.785ZM171.465 443.631L176.839 453.229L183.819 449.321L178.445 439.723L171.465 443.631ZM185.049 433.796L173.601 437.913L176.309 445.441L187.756 441.324L185.049 433.796ZM149.814 416.457L184.085 440.82L188.72 434.299L154.45 409.937L149.814 416.457Z" fill="#151414" mask="url(#path-43-inside-4_22_370)"/>
            <circle cx="129.373" cy="202" r="16" fill="#151414"/>
            <circle cx="363" cy="248.5" r="10" fill="#151414"/>
            <circle cx="116.426" cy="280" r="20" fill="#FFC71F"/>
            <defs>
            <filter id="filter0_d_22_370" x="306" y="79" width="106" height="106" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="8"/>
            <feGaussianBlur stdDeviation="6.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.399373 0 0 0 0 0.254167 0 0 0 0.67 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22_370"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_22_370" result="shape"/>
            </filter>
            <filter id="filter1_d_22_370" x="43" y="321" width="171.183" height="171.183" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="8"/>
            <feGaussianBlur stdDeviation="6.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.137255 0 0 0 0 0.427451 0 0 0 0 0.964706 0 0 0 0.67 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22_370"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_22_370" result="shape"/>
            </filter>
            <filter id="filter2_d_22_370" x="1" y="17.7218" width="317.964" height="134.832" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="8"/>
            <feGaussianBlur stdDeviation="6.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.996078 0 0 0 0 0.819608 0 0 0 0 0.196078 0 0 0 0.67 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22_370"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_22_370" result="shape"/>
            </filter>
            <filter id="filter3_d_22_370" x="359.963" y="189.963" width="212.074" height="212.074" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="8"/>
            <feGaussianBlur stdDeviation="6.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.399373 0 0 0 0 0.254167 0 0 0 0.67 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22_370"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_22_370" result="shape"/>
            </filter>
            </defs>
          </svg>
        </section>
      </div>
      <main class={tw`w-full pt-20 bg-[#FFFCF2]`}>
        <section class={tw`max-w-5xl mx-auto`}>
          <h2 id="recent" class={tw`text-3xl mb-2`}>Recently Added</h2>
          <p class={tw`uppercase text-xs mb-4`}>
            Last updated <time dateTime="2022-07-04T19:00">July 4, 2022</time>.</p>
          <div class={tw`w-full flex flex-wrap`}>
            {sliceLink.map(link => {
              return (
                <article class={tw`border-4 border-gray-900 px-6 pt-9 pb-12 -mr-1 -mb-1 w-full sm:w-[calc(50%+0.25rem)] lg:w-[calc(33.333333%+0.25rem)]`} data-key={link.id}
                style="background: url('/cornertone.png'), #fafafa;
                background-position: top left;
                background-size: 100% 100%;
                background-repeat: no-repeat;">
                  <p class={tw`uppercase text-xs font-extrabold text-[#2D67BE] mb-4`}>{link.fields.type}</p>
                  <h3 class={tw`text-2xl text-gray-800 mb-2`}>{link.fields.linkTitle}</h3>
                  <a class={tw`text-xs uppercase mb-2 inline-block hover:underline`} href={link.fields.authorUrl}>by {link.fields.author}</a>
                  <p class={tw`text-gray-500 mb-4`}>{link.fields.linkDesc}</p>
                  <a class={tw `underline`} href={link.fields.linkUrl}>Download</a>
                </article>
              )
            })}
            <a href="/all-links" class={tw`w-[calc(100%+0.25rem)] border-4 border-gray-900 py-6 flex justify-center cursor-pointer bg-[#fafafa] hover:bg-white`}>
              <span class={tw`underline text-2xl`}>Browse All</span>
            </a>  
          </div>
        </section>
      </main>
      <footer class={tw`flex justify-center w-full py-12 bg-[#FFFCF2]`}>
        <p class={tw`max-w-5xl mx-auto`}>FigmaLinks is maintained by <a class={tw`underline`} href="https://realtinypenguin.com">Brian Hinton</a>.</p>
      </footer>
    </Fragment>
  );
}
