import React from "react"
import { IconProps } from "./interface"

export const SummaryIcon: React.FC<IconProps> = ({ width = '24', height = '24',fill="#212636" }) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.81249 9.09609C7.90753 9.04123 7.98644 8.96231 8.04129 8.86727C8.09615 8.77223 8.12502 8.66442 8.12499 8.55469V2.92969C8.12443 2.83004 8.10006 2.73198 8.0539 2.64367C8.00774 2.55536 7.94113 2.47936 7.85964 2.42202C7.77814 2.36469 7.68412 2.32766 7.5854 2.31405C7.48669 2.30043 7.38616 2.31062 7.29218 2.34375C5.46794 2.98939 3.93383 4.26457 2.96563 5.94005C1.99743 7.61554 1.65863 9.58145 2.01015 11.4844C2.02837 11.5828 2.06995 11.6754 2.1314 11.7544C2.19285 11.8333 2.27237 11.8964 2.36327 11.9383C2.44519 11.9766 2.53456 11.9963 2.62499 11.9961C2.73469 11.9961 2.84247 11.9673 2.93749 11.9125L7.81249 9.09609ZM6.87499 3.87656V8.19375L3.13437 10.3523C3.12499 10.2344 3.12499 10.1156 3.12499 10C3.1261 8.73309 3.47678 7.49106 4.13843 6.41066C4.80007 5.33025 5.74701 4.45337 6.87499 3.87656ZM18.125 10C18.1256 11.7837 17.5393 13.518 16.4564 14.9354C15.3735 16.3528 13.8543 17.3745 12.1332 17.8428C10.4121 18.3111 8.58472 18.2 6.93298 17.5267C5.28125 16.8534 3.89698 15.6553 2.99374 14.1172C2.95164 14.0461 2.92403 13.9675 2.91251 13.8857C2.901 13.8039 2.9058 13.7207 2.92665 13.6407C2.9475 13.5608 2.98398 13.4859 3.03398 13.4201C3.08398 13.3544 3.14651 13.2992 3.21796 13.2578L9.37499 9.67422V2.5C9.37499 2.33424 9.44084 2.17527 9.55805 2.05806C9.67526 1.94085 9.83423 1.875 9.99999 1.875C11.4179 1.87572 12.8109 2.24729 14.0408 2.95282C15.2706 3.65834 16.2946 4.67328 17.0109 5.89688C17.0195 5.90938 17.0273 5.92188 17.0351 5.93516C17.043 5.94844 17.0508 5.96406 17.0578 5.97812C17.7588 7.20247 18.1268 8.58916 18.125 10Z" fill={fill}/>
        </svg>
        
    )
  }

  export const SalesIcon: React.FC<IconProps> = ({ width = '24', height = '24',fill="#8A94A6" }) => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.0086 8.62501L9.25 0.866412C9.13435 0.749834 8.99668 0.657407 8.84499 0.594506C8.6933 0.531604 8.53062 0.499482 8.36641 0.500006H1.125C0.95924 0.500006 0.800269 0.565854 0.683059 0.683065C0.565849 0.800275 0.500001 0.959246 0.500001 1.12501V8.36641C0.499476 8.53063 0.531598 8.6933 0.5945 8.84499C0.657402 8.99668 0.749828 9.13435 0.866407 9.25001L8.625 17.0086C8.74108 17.1247 8.87889 17.2168 9.03057 17.2796C9.18224 17.3425 9.34481 17.3748 9.50899 17.3748C9.67316 17.3748 9.83573 17.3425 9.98741 17.2796C10.1391 17.2168 10.2769 17.1247 10.393 17.0086L17.0086 10.393C17.1247 10.2769 17.2168 10.1391 17.2796 9.98741C17.3425 9.83574 17.3748 9.67317 17.3748 9.50899C17.3748 9.34481 17.3425 9.18225 17.2796 9.03057C17.2168 8.8789 17.1247 8.74108 17.0086 8.62501ZM4.5625 5.50001C4.37708 5.50001 4.19582 5.44502 4.04165 5.34201C3.88748 5.239 3.76732 5.09258 3.69636 4.92127C3.62541 4.74997 3.60684 4.56147 3.64301 4.37961C3.67919 4.19775 3.76848 4.03071 3.89959 3.89959C4.0307 3.76848 4.19775 3.67919 4.3796 3.64302C4.56146 3.60685 4.74996 3.62541 4.92127 3.69637C5.09257 3.76733 5.23899 3.88749 5.342 4.04166C5.44502 4.19583 5.5 4.37709 5.5 4.56251C5.5 4.81115 5.40123 5.0496 5.22541 5.22542C5.0496 5.40123 4.81114 5.50001 4.5625 5.50001Z" fill={fill} />
        </svg>
        
    )
  }


  export const ChatIcon: React.FC<IconProps> = ({ width = '24', height = '24',fill="#8A94A6"}) => {
    return (
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.3125 0.875C6.24119 0.877275 4.25538 1.70111 2.79074 3.16574C1.32611 4.63038 0.502275 6.61619 0.5 8.6875V15.2758C0.500413 15.6003 0.629526 15.9115 0.859022 16.141C1.08852 16.3705 1.39966 16.4996 1.72422 16.5H8.3125C10.3845 16.5 12.3716 15.6769 13.8368 14.2118C15.3019 12.7466 16.125 10.7595 16.125 8.6875C16.125 6.6155 15.3019 4.62836 13.8368 3.16323C12.3716 1.6981 10.3845 0.875 8.3125 0.875ZM10.5 10.875H5.5C5.33424 10.875 5.17527 10.8092 5.05806 10.6919C4.94085 10.5747 4.875 10.4158 4.875 10.25C4.875 10.0842 4.94085 9.92527 5.05806 9.80806C5.17527 9.69085 5.33424 9.625 5.5 9.625H10.5C10.6658 9.625 10.8247 9.69085 10.9419 9.80806C11.0592 9.92527 11.125 10.0842 11.125 10.25C11.125 10.4158 11.0592 10.5747 10.9419 10.6919C10.8247 10.8092 10.6658 10.875 10.5 10.875ZM10.5 8.375H5.5C5.33424 8.375 5.17527 8.30915 5.05806 8.19194C4.94085 8.07473 4.875 7.91576 4.875 7.75C4.875 7.58424 4.94085 7.42527 5.05806 7.30806C5.17527 7.19085 5.33424 7.125 5.5 7.125H10.5C10.6658 7.125 10.8247 7.19085 10.9419 7.30806C11.0592 7.42527 11.125 7.58424 11.125 7.75C11.125 7.91576 11.0592 8.07473 10.9419 8.19194C10.8247 8.30915 10.6658 8.375 10.5 8.375Z" fill={fill} />
        </svg>
        
        
    )
  }


  export const DecreaseIcon: React.FC<IconProps> =({})=>{
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5 12.75V18.75C22.5 18.9489 22.421 19.1397 22.2803 19.2803C22.1397 19.421 21.9489 19.5 21.75 19.5H15.75C15.5511 19.5 15.3603 19.421 15.2197 19.2803C15.079 19.1397 15 18.9489 15 18.75C15 18.5511 15.079 18.3603 15.2197 18.2197C15.3603 18.079 15.5511 18 15.75 18H19.9397L12.75 10.8103L9.53062 14.0306C9.46096 14.1004 9.37824 14.1557 9.28719 14.1934C9.19615 14.2312 9.09855 14.2506 8.99999 14.2506C8.90143 14.2506 8.80383 14.2312 8.71278 14.1934C8.62174 14.1557 8.53902 14.1004 8.46936 14.0306L1.71936 7.28063C1.57863 7.1399 1.49957 6.94903 1.49957 6.75C1.49957 6.55098 1.57863 6.36011 1.71936 6.21938C1.8601 6.07865 2.05097 5.99959 2.24999 5.99959C2.44901 5.99959 2.63988 6.07865 2.78061 6.21938L8.99999 12.4397L12.2194 9.21938C12.289 9.14965 12.3717 9.09433 12.4628 9.05659C12.5538 9.01884 12.6514 8.99941 12.75 8.99941C12.8486 8.99941 12.9461 9.01884 13.0372 9.05659C13.1282 9.09433 13.211 9.14965 13.2806 9.21938L21 16.9397V12.75C21 12.5511 21.079 12.3603 21.2197 12.2197C21.3603 12.079 21.5511 12 21.75 12C21.9489 12 22.1397 12.079 22.2803 12.2197C22.421 12.3603 22.5 12.5511 22.5 12.75Z" fill="#F04438"/>
</svg>
    )
  }


  export const IncreaseIcon: React.FC<IconProps> =({fill="#15B79F",width="22" , height="14"})=>{
    return(
<svg width={width} height={height} viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.5 1.25V7.25C21.5 7.44891 21.421 7.63968 21.2803 7.78033C21.1397 7.92098 20.9489 8 20.75 8C20.5511 8 20.3603 7.92098 20.2197 7.78033C20.079 7.63968 20 7.44891 20 7.25V3.06031L12.2806 10.7806C12.211 10.8504 12.1283 10.9057 12.0372 10.9434C11.9462 10.9812 11.8486 11.0006 11.75 11.0006C11.6514 11.0006 11.5538 10.9812 11.4628 10.9434C11.3717 10.9057 11.289 10.8504 11.2194 10.7806L8 7.56031L1.78062 13.7806C1.63989 13.9214 1.44902 14.0004 1.25 14.0004C1.05097 14.0004 0.860103 13.9214 0.719372 13.7806C0.578642 13.6399 0.49958 13.449 0.49958 13.25C0.49958 13.051 0.578642 12.8601 0.719372 12.7194L7.46937 5.96937C7.53903 5.89964 7.62174 5.84432 7.71279 5.80658C7.80384 5.76884 7.90144 5.74941 8 5.74941C8.09856 5.74941 8.19615 5.76884 8.2872 5.80658C8.37825 5.84432 8.46097 5.89964 8.53062 5.96937L11.75 9.18969L18.9397 2H14.75C14.5511 2 14.3603 1.92098 14.2197 1.78033C14.079 1.63968 14 1.44891 14 1.25C14 1.05109 14.079 0.860322 14.2197 0.71967C14.3603 0.579018 14.5511 0.5 14.75 0.5H20.75C20.9489 0.5 21.1397 0.579018 21.2803 0.71967C21.421 0.860322 21.5 1.05109 21.5 1.25Z" fill={fill} />
</svg>

    )
  }

//   

export const ConsultationIcon: React.FC<IconProps> =({fill="#667085"})=>{
    return(
<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.875 4.8125C9.87364 6.05528 9.37934 7.24677 8.50056 8.12556C7.62177 9.00434 6.43028 9.49864 5.1875 9.5H1.23453C1.0398 9.49975 0.853111 9.42228 0.715413 9.28459C0.577716 9.14689 0.500248 8.9602 0.5 8.76547V4.8125C0.5 3.5693 0.99386 2.37701 1.87294 1.49794C2.75201 0.61886 3.9443 0.125 5.1875 0.125C6.4307 0.125 7.62299 0.61886 8.50206 1.49794C9.38114 2.37701 9.875 3.5693 9.875 4.8125Z" fill={fill} />
</svg>


    )
  }

  export const OrderPlacedIcon: React.FC<IconProps> =({})=>{
    return(
<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4052 5.375L5.75 0.719847C5.68061 0.6499 5.59801 0.594444 5.507 0.556703C5.41598 0.518962 5.31838 0.499689 5.21985 0.500004H0.875004C0.775548 0.500004 0.680165 0.539513 0.609839 0.609839C0.539513 0.680165 0.500004 0.775548 0.500004 0.875004V5.21985C0.499689 5.31838 0.518962 5.41598 0.556703 5.507C0.594444 5.59801 0.6499 5.68061 0.719847 5.75L5.375 10.4052C5.44465 10.4748 5.52734 10.5301 5.61834 10.5678C5.70935 10.6055 5.80689 10.6249 5.90539 10.6249C6.0039 10.6249 6.10144 10.6055 6.19245 10.5678C6.28345 10.5301 6.36614 10.4748 6.43579 10.4052L10.4052 6.43579C10.4748 6.36614 10.5301 6.28345 10.5678 6.19245C10.6055 6.10144 10.6249 6.0039 10.6249 5.90539C10.6249 5.80689 10.6055 5.70935 10.5678 5.61834C10.5301 5.52734 10.4748 5.44465 10.4052 5.375ZM2.9375 3.5C2.82625 3.5 2.7175 3.46701 2.625 3.40521C2.53249 3.3434 2.4604 3.25555 2.41782 3.15276C2.37525 3.04998 2.36411 2.93688 2.38581 2.82777C2.40752 2.71865 2.46109 2.61842 2.53976 2.53976C2.61842 2.46109 2.71865 2.40752 2.82777 2.38581C2.93688 2.36411 3.04998 2.37525 3.15276 2.41782C3.25555 2.4604 3.3434 2.53249 3.40521 2.625C3.46701 2.7175 3.5 2.82625 3.5 2.9375C3.5 3.08669 3.44074 3.22976 3.33525 3.33525C3.22976 3.44074 3.08669 3.5 2.9375 3.5Z" fill="#667085"/>
</svg>


    )
  }

  export const ConversionIcon: React.FC<IconProps> =({})=>{
    return(
<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4061 3.2614L5.38686 9.28015C5.31722 9.34982 5.23453 9.40508 5.14353 9.44278C5.05252 9.48048 4.95498 9.49988 4.85647 9.49988C4.75797 9.49988 4.66043 9.48048 4.56942 9.44278C4.47842 9.40508 4.39573 9.34982 4.32608 9.28015L0.968896 5.90515C0.828493 5.76453 0.749634 5.57394 0.749634 5.37523C0.749634 5.17652 0.828493 4.98593 0.968896 4.84531L2.0939 3.72031C2.23407 3.5801 2.42405 3.5011 2.6223 3.50057C2.82055 3.50005 3.01095 3.57804 3.15186 3.7175L4.86936 5.37078L4.87452 5.37594L9.22124 1.09297C9.3618 0.952992 9.55209 0.874405 9.75046 0.874405C9.94883 0.874405 10.1391 0.952992 10.2797 1.09297L11.4047 2.19734C11.4749 2.26695 11.5307 2.34977 11.5688 2.44103C11.6069 2.53229 11.6266 2.63018 11.6268 2.72908C11.6269 2.82798 11.6075 2.92592 11.5696 3.01728C11.5317 3.10864 11.4761 3.19161 11.4061 3.2614Z" fill="#667085"/>
</svg>

    )
  }

  export const TotsalesIcon: React.FC<IconProps> =({})=>{
    return(
<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5938 3.12875C10.575 3.08187 10.5553 3.035 10.5352 2.98812C10.2327 2.29064 9.74327 1.69039 9.12094 1.25375H10.125C10.2245 1.25375 10.3198 1.21424 10.3902 1.14391C10.4605 1.07359 10.5 0.978206 10.5 0.87875C10.5 0.779294 10.4605 0.683911 10.3902 0.613585C10.3198 0.543259 10.2245 0.50375 10.125 0.50375H5.25C4.21317 0.505066 3.21475 0.89626 2.45301 1.59965C1.69126 2.30304 1.2219 3.26718 1.13813 4.30062C0.814201 4.38115 0.526387 4.56741 0.320244 4.82993C0.114102 5.09245 0.00140696 5.41622 0 5.75C0 5.84946 0.0395088 5.94484 0.109835 6.01517C0.180161 6.08549 0.275544 6.125 0.375 6.125C0.474456 6.125 0.569839 6.08549 0.640165 6.01517C0.710491 5.94484 0.75 5.84946 0.75 5.75C0.750087 5.61325 0.78756 5.47913 0.858364 5.36214C0.929169 5.24516 1.03061 5.14975 1.15172 5.08625C1.24506 5.92759 1.59588 6.71959 2.15625 7.35406L2.745 9.00219C2.79705 9.14797 2.89293 9.27407 3.01949 9.3632C3.14605 9.45233 3.29708 9.50011 3.45187 9.5H4.04813C4.20284 9.50002 4.35377 9.45219 4.48023 9.36306C4.6067 9.27394 4.70251 9.14789 4.75453 9.00219L4.84453 8.75H7.53047L7.62047 9.00219C7.67249 9.14789 7.7683 9.27394 7.89477 9.36306C8.02123 9.45219 8.17216 9.50002 8.32687 9.5H8.92313C9.07784 9.50002 9.22877 9.45219 9.35523 9.36306C9.4817 9.27394 9.57751 9.14789 9.62953 9.00219L10.3894 6.875H10.5C10.7984 6.875 11.0845 6.75647 11.2955 6.5455C11.5065 6.33452 11.625 6.04837 11.625 5.75V4.25C11.625 3.96783 11.519 3.69595 11.328 3.48827C11.137 3.28058 10.8749 3.15226 10.5938 3.12875ZM7.125 2.375H5.25C5.15054 2.375 5.05516 2.33549 4.98484 2.26516C4.91451 2.19484 4.875 2.09946 4.875 2C4.875 1.90054 4.91451 1.80516 4.98484 1.73483C5.05516 1.66451 5.15054 1.625 5.25 1.625H7.125C7.22446 1.625 7.31984 1.66451 7.39017 1.73483C7.46049 1.80516 7.5 1.90054 7.5 2C7.5 2.09946 7.46049 2.19484 7.39017 2.26516C7.31984 2.33549 7.22446 2.375 7.125 2.375ZM8.4375 5C8.32625 5 8.21749 4.96701 8.12499 4.9052C8.03249 4.84339 7.96039 4.75554 7.91782 4.65276C7.87524 4.54998 7.8641 4.43688 7.88581 4.32776C7.90751 4.21865 7.96109 4.11842 8.03975 4.03975C8.11842 3.96109 8.21865 3.90751 8.32776 3.88581C8.43688 3.8641 8.54998 3.87524 8.65276 3.91782C8.75554 3.96039 8.84339 4.03249 8.9052 4.12499C8.96701 4.21749 9 4.32625 9 4.4375C9 4.58668 8.94074 4.72976 8.83525 4.83525C8.72976 4.94074 8.58668 5 8.4375 5Z" fill="#667085"/>
</svg>

    )
  }

  export const AvgOrderIcon: React.FC<IconProps> =({})=>{
    return(
<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.73031 0.9925C8.75859 0.506875 7.46859 0.25 6 0.25C4.53141 0.25 3.24141 0.506875 2.26969 0.9925C1.29797 1.47812 0.75 2.16156 0.75 2.875V5.125C0.75 5.83844 1.30406 6.52422 2.26969 7.0075C3.23531 7.49078 4.53141 7.75 6 7.75C7.46859 7.75 8.75859 7.49313 9.73031 7.0075C10.702 6.52188 11.25 5.83844 11.25 5.125V2.875C11.25 2.16156 10.6959 1.47578 9.73031 0.9925ZM5.625 5.4925V6.9925C4.73438 6.96344 3.98438 6.83219 3.375 6.64141V5.17422C4.10959 5.36993 4.86496 5.4771 5.625 5.49344V5.4925ZM6.375 5.4925C7.13504 5.47616 7.89041 5.369 8.625 5.17328V6.64094C8.01562 6.83172 7.26562 6.96297 6.375 6.99203V5.4925ZM1.5 5.125V4.25922C1.73599 4.45511 1.99436 4.62237 2.26969 4.7575C2.38359 4.81422 2.50406 4.86766 2.625 4.91828V6.34375C1.88297 5.97625 1.5 5.51359 1.5 5.125ZM9.375 6.34375V4.91828C9.49734 4.86766 9.61641 4.81422 9.73031 4.7575C10.0056 4.62237 10.264 4.45511 10.5 4.25922V5.125C10.5 5.51359 10.117 5.97625 9.375 6.34375Z" fill="#667085"/>
</svg>


    )
  }

  export const PaidIcon: React.FC<IconProps> =({})=>{
    return(
<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5938 3.12875C10.575 3.08187 10.5553 3.035 10.5352 2.98812C10.2327 2.29064 9.74327 1.69039 9.12094 1.25375H10.125C10.2245 1.25375 10.3198 1.21424 10.3902 1.14391C10.4605 1.07359 10.5 0.978206 10.5 0.87875C10.5 0.779294 10.4605 0.683911 10.3902 0.613585C10.3198 0.543259 10.2245 0.50375 10.125 0.50375H5.25C4.21317 0.505066 3.21475 0.89626 2.45301 1.59965C1.69126 2.30304 1.2219 3.26718 1.13813 4.30062C0.814201 4.38115 0.526387 4.56741 0.320244 4.82993C0.114102 5.09245 0.00140696 5.41622 0 5.75C0 5.84946 0.0395088 5.94484 0.109835 6.01517C0.180161 6.08549 0.275544 6.125 0.375 6.125C0.474456 6.125 0.569839 6.08549 0.640165 6.01517C0.710491 5.94484 0.75 5.84946 0.75 5.75C0.750087 5.61325 0.78756 5.47913 0.858364 5.36214C0.929169 5.24516 1.03061 5.14975 1.15172 5.08625C1.24506 5.92759 1.59588 6.71959 2.15625 7.35406L2.745 9.00219C2.79705 9.14797 2.89293 9.27407 3.01949 9.3632C3.14605 9.45233 3.29708 9.50011 3.45187 9.5H4.04813C4.20284 9.50002 4.35377 9.45219 4.48023 9.36306C4.6067 9.27394 4.70251 9.14789 4.75453 9.00219L4.84453 8.75H7.53047L7.62047 9.00219C7.67249 9.14789 7.7683 9.27394 7.89477 9.36306C8.02123 9.45219 8.17216 9.50002 8.32687 9.5H8.92313C9.07784 9.50002 9.22877 9.45219 9.35523 9.36306C9.4817 9.27394 9.57751 9.14789 9.62953 9.00219L10.3894 6.875H10.5C10.7984 6.875 11.0845 6.75647 11.2955 6.5455C11.5065 6.33452 11.625 6.04837 11.625 5.75V4.25C11.625 3.96783 11.519 3.69595 11.328 3.48827C11.137 3.28058 10.8749 3.15226 10.5938 3.12875ZM7.125 2.375H5.25C5.15054 2.375 5.05516 2.33549 4.98484 2.26516C4.91451 2.19484 4.875 2.09946 4.875 2C4.875 1.90054 4.91451 1.80516 4.98484 1.73483C5.05516 1.66451 5.15054 1.625 5.25 1.625H7.125C7.22446 1.625 7.31984 1.66451 7.39017 1.73483C7.46049 1.80516 7.5 1.90054 7.5 2C7.5 2.09946 7.46049 2.19484 7.39017 2.26516C7.31984 2.33549 7.22446 2.375 7.125 2.375ZM8.4375 5C8.32625 5 8.21749 4.96701 8.12499 4.9052C8.03249 4.84339 7.96039 4.75554 7.91782 4.65276C7.87524 4.54998 7.8641 4.43688 7.88581 4.32776C7.90751 4.21865 7.96109 4.11842 8.03975 4.03975C8.11842 3.96109 8.21865 3.90751 8.32776 3.88581C8.43688 3.8641 8.54998 3.87524 8.65276 3.91782C8.75554 3.96039 8.84339 4.03249 8.9052 4.12499C8.96701 4.21749 9 4.32625 9 4.4375C9 4.58668 8.94074 4.72976 8.83525 4.83525C8.72976 4.94074 8.58668 5 8.4375 5Z" fill="#667085"/>
</svg>


    )
  }



export const ArrowIcon: React.FC<IconProps> = ({className=""})=>{
  return (
    <svg className={className} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5306 1.53061L6.5306 6.53061C6.46092 6.60053 6.37813 6.65601 6.28696 6.69386C6.1958 6.73172 6.09806 6.7512 5.99935 6.7512C5.90064 6.7512 5.8029 6.73172 5.71173 6.69386C5.62057 6.65601 5.53778 6.60053 5.4681 6.53061L0.468098 1.53061C0.327202 1.38972 0.248047 1.19862 0.248047 0.999362C0.248047 0.800105 0.327202 0.609009 0.468098 0.468112C0.608994 0.327216 0.800091 0.248062 0.999348 0.248062C1.19861 0.248062 1.3897 0.327216 1.5306 0.468112L5.99997 4.93749L10.4693 0.467488C10.6102 0.326592 10.8013 0.247437 11.0006 0.247437C11.1999 0.247437 11.391 0.326592 11.5318 0.467488C11.6727 0.608384 11.7519 0.79948 11.7519 0.998738C11.7519 1.198 11.6727 1.38909 11.5318 1.52999L11.5306 1.53061Z" fill="#667085"/>
    </svg>
    
  )
}

export const RedirectIcon: React.FC<IconProps> = ()=>{
  return (
<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.0626 1.5V8.8125C11.0626 8.96168 11.0033 9.10476 10.8978 9.21025C10.7923 9.31574 10.6493 9.375 10.5001 9.375C10.3509 9.375 10.2078 9.31574 10.1023 9.21025C9.99683 9.10476 9.93757 8.96168 9.93757 8.8125V2.85773L1.89804 10.898C1.79249 11.0035 1.64934 11.0628 1.50007 11.0628C1.3508 11.0628 1.20765 11.0035 1.1021 10.898C0.996552 10.7924 0.937256 10.6493 0.937256 10.5C0.937256 10.3507 0.996552 10.2076 1.1021 10.102L9.14233 2.0625H3.18757C3.03838 2.0625 2.89531 2.00324 2.78982 1.89775C2.68433 1.79226 2.62507 1.64918 2.62507 1.5C2.62507 1.35082 2.68433 1.20774 2.78982 1.10225C2.89531 0.996763 3.03838 0.9375 3.18757 0.9375H10.5001C10.6493 0.9375 10.7923 0.996763 10.8978 1.10225C11.0033 1.20774 11.0626 1.35082 11.0626 1.5Z" fill="#8A94A6"/>
</svg>

  )
}

export const BarChartIcon: React.FC<IconProps> = ()=>{
  return (

<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.875 8.75C9.875 8.84946 9.83549 8.94484 9.76517 9.01517C9.69484 9.08549 9.59946 9.125 9.5 9.125H0.5C0.400544 9.125 0.305161 9.08549 0.234835 9.01517C0.164509 8.94484 0.125 8.84946 0.125 8.75C0.125 8.65054 0.164509 8.55516 0.234835 8.48483C0.305161 8.41451 0.400544 8.375 0.5 8.375H0.875V5.375C0.875 5.27554 0.914509 5.18016 0.984835 5.10983C1.05516 5.03951 1.15054 5 1.25 5H2.375C2.47446 5 2.56984 5.03951 2.64016 5.10983C2.71049 5.18016 2.75 5.27554 2.75 5.375V8.375H3.5V3.125C3.5 3.02554 3.53951 2.93016 3.60984 2.85984C3.68016 2.78951 3.77554 2.75 3.875 2.75H5.375C5.47446 2.75 5.56984 2.78951 5.64017 2.85984C5.71049 2.93016 5.75 3.02554 5.75 3.125V8.375H6.5V0.875C6.5 0.775544 6.53951 0.680161 6.60983 0.609835C6.68016 0.539509 6.77554 0.5 6.875 0.5H8.75C8.84946 0.5 8.94484 0.539509 9.01517 0.609835C9.08549 0.680161 9.125 0.775544 9.125 0.875V8.375H9.5C9.59946 8.375 9.69484 8.41451 9.76517 8.48483C9.83549 8.55516 9.875 8.65054 9.875 8.75Z" fill="#667085"/>
</svg>

  )
}

