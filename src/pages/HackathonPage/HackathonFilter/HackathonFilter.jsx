import React, { useReducer } from 'react';
import { connectAppContext } from '../../../contexts/appContext/appContext';
import "./HackathonFilter.scss";
import hackathonReducer from './hackathonReducer/hackathonReducer';
import HackathonSearch from './HackathonSearch/HackathonSearch';
import HackathonTags from './HackathonTags/HackathonTags';




const HackathonFilter = ({appContext}) => {

    const [hackathonState, dispatchHackathon] = useReducer(hackathonReducer, {
        popularTags: [
            {label: "Productivity", isSelected: false}, 
            {label: "Blockchain", isSelected: false}, 
            {label: "Education", isSelected: false}, 
            {label: "Web", isSelected: false}, 
            {label: "Machine Learning/AI", isSelected: false}, 
            {label: "Mobile", isSelected: false}, 
            {label: "Beginner Friendly", isSelected: false}, 
        ],
        searchValue: "",
        statuses: [
            {
                label: 'All', 
                value: 'all',
                isSelected: true,
                svgIcon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5812 7.7C13.6936 7.82118 13.7534 7.98193 13.7475 8.14708C13.7417 8.31222 13.6707 8.46833 13.55 8.58125L10.2687 11.6187C10.1525 11.7244 10.0008 11.7824 9.84375 11.7812C9.76123 11.7785 9.68008 11.7594 9.60499 11.725C9.52989 11.6907 9.46235 11.6418 9.40625 11.5813L8.3125 10.3813C8.21272 10.257 8.16417 10.0993 8.17678 9.94046C8.18938 9.7816 8.2622 9.63356 8.38033 9.5266C8.49847 9.41964 8.65299 9.36185 8.81232 9.36504C8.97165 9.36822 9.12374 9.43215 9.2375 9.54375L9.90625 10.275L12.725 7.66875C12.8448 7.5639 13.0002 7.50875 13.1593 7.51456C13.3185 7.52037 13.4694 7.58669 13.5812 7.7ZM16.875 6.025V15C16.875 15.4973 16.6775 15.9742 16.3258 16.3258C15.9742 16.6775 15.4973 16.875 15 16.875C15 17.3723 14.8025 17.8492 14.4508 18.2008C14.0992 18.5525 13.6223 18.75 13.125 18.75H5C4.50272 18.75 4.02581 18.5525 3.67417 18.2008C3.32254 17.8492 3.125 17.3723 3.125 16.875V5C3.125 4.50272 3.32254 4.02581 3.67417 3.67417C4.02581 3.32254 4.50272 3.125 5 3.125C5 2.62772 5.19754 2.15081 5.54917 1.79917C5.9008 1.44754 6.37772 1.25 6.875 1.25H12.95C13.2491 1.25109 13.5435 1.32371 13.8088 1.46179C14.0741 1.59987 14.3025 1.79941 14.475 2.04375L16.5312 4.9375C16.756 5.25551 16.8761 5.6356 16.875 6.025ZM13.75 3.175V4.375C13.75 4.54076 13.8158 4.69973 13.9331 4.81694C14.0503 4.93415 14.2092 5 14.375 5H15.0437L13.75 3.175ZM13.75 16.875H6.875C6.37772 16.875 5.9008 16.6775 5.54917 16.3258C5.19754 15.9742 5 15.4973 5 15V4.375C4.83424 4.375 4.67527 4.44085 4.55806 4.55806C4.44085 4.67527 4.375 4.83424 4.375 5V16.875C4.375 17.0408 4.44085 17.1997 4.55806 17.3169C4.67527 17.4342 4.83424 17.5 5 17.5H13.125C13.2908 17.5 13.4497 17.4342 13.5669 17.3169C13.6842 17.1997 13.75 17.0408 13.75 16.875ZM15.625 6.25H14.375C13.8777 6.25 13.4008 6.05246 13.0492 5.70083C12.6975 5.34919 12.5 4.87228 12.5 4.375V2.5H6.875C6.70924 2.5 6.55027 2.56585 6.43306 2.68306C6.31585 2.80027 6.25 2.95924 6.25 3.125V15C6.25 15.1658 6.31585 15.3247 6.43306 15.4419C6.55027 15.5592 6.70924 15.625 6.875 15.625H15C15.1658 15.625 15.3247 15.5592 15.4419 15.4419C15.5592 15.3247 15.625 15.1658 15.625 15V6.25Z" fill="#080A25"></path></svg>,

            },
            {
                label: 'Coming Soon', 
                value: 'comingsoon', 
                isSelected: false,
                svgIcon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_781_2572)"><path d="M12.0692 2.5825C11.5785 2.5825 11.1953 2.18222 11.1953 1.70859C11.1953 1.19332 11.644 0.788009 12.1553 0.839063C12.6095 0.887501 12.9431 1.26262 12.9431 1.70859C12.9431 2.18242 12.5602 2.5825 12.0692 2.5825Z" fill="#080A25"></path><path d="M17.9532 11.0809H17.9536C17.9991 10.6007 18.4256 10.2481 18.9062 10.2935C19.3864 10.3389 19.739 10.7654 19.6936 11.2461C19.6503 11.6983 19.2697 12.0374 18.8245 12.0374C18.3056 12.0374 17.9049 11.592 17.9532 11.0809Z" fill="#080A25"></path><path d="M17.7186 8.24808C17.5936 7.78187 17.8702 7.30297 18.3364 7.17797C18.8027 7.053 19.282 7.32961 19.407 7.79586C19.532 8.26207 19.255 8.74141 18.7891 8.86641C18.7131 8.88652 18.6371 8.89609 18.5623 8.89609C18.1761 8.89609 17.823 8.63875 17.7186 8.24808Z" fill="#080A25"></path><path d="M16.5051 5.682C16.2242 5.28919 16.3147 4.74341 16.707 4.46247C17.0994 4.18196 17.6451 4.27196 17.9261 4.66477C18.207 5.05712 18.1166 5.6029 17.7242 5.88383C17.57 5.99395 17.3926 6.04727 17.2165 6.04727C16.9438 6.04727 16.6756 5.92012 16.5051 5.682Z" fill="#080A25"></path><path d="M14.2308 2.4869C14.5004 2.08662 15.0435 1.98131 15.4438 2.25092C15.844 2.52096 15.9497 3.06412 15.6797 3.46389C15.5111 3.71428 15.2353 3.84928 14.9544 3.84928C14.2604 3.84928 13.8379 3.06912 14.2308 2.4869Z" fill="#080A25"></path><path d="M17.9687 15.0735C17.4878 15.0735 17.0947 14.6823 17.0947 14.1996C17.0947 13.6833 17.5427 13.2792 18.0547 13.33C18.5169 13.3808 18.8426 13.7593 18.8426 14.1996C18.8426 14.6704 18.4607 15.0735 17.9687 15.0735Z" fill="#080A25"></path><path d="M16.8276 15.8668C16.4806 15.5815 15.9739 15.606 15.6557 15.9233C14.2214 17.3537 12.2899 18.1919 10.2466 18.2489C5.85126 18.3717 2.17548 14.8957 2.05271 10.5003C1.96548 7.37819 3.71158 4.53179 6.42442 3.15929L6.70524 4.31058C6.77005 4.57636 7.10126 4.66804 7.29352 4.47343L9.96715 1.76703C10.1501 1.58187 10.0737 1.2689 9.8261 1.18878L6.20657 0.0174552C5.9463 -0.0667635 5.6945 0.167104 5.75935 0.432885L6.00118 1.42433C2.48587 3.02136 0.195407 6.60484 0.305563 10.5491C0.455602 15.9204 4.92364 20.1461 10.2954 19.996C12.7862 19.9265 15.1407 18.905 16.889 17.1617C17.2552 16.7966 17.2271 16.1953 16.8276 15.8668Z" fill="#080A25"></path><path d="M18.806 10.29C18.8905 10.44 18.9319 10.6164 18.9145 10.8009C18.8717 11.2476 18.4997 11.5832 18.0615 11.5914C18.2104 11.8557 18.4932 12.0374 18.8245 12.0374C19.2698 12.0374 19.6504 11.6984 19.6937 11.2461C19.7425 10.7291 19.3318 10.2798 18.806 10.29Z" fill="#080A25"></path><path d="M19.407 7.79591C19.3007 7.39951 18.9382 7.14037 18.5455 7.14837C18.8681 7.72271 18.4627 8.437 17.8008 8.45032C17.9548 8.72509 18.2475 8.89614 18.5623 8.89614C18.637 8.89614 18.7131 8.88654 18.7891 8.86646C19.2549 8.74146 19.5319 8.26212 19.407 7.79591Z" fill="#080A25"></path><path d="M17.9261 4.66473C17.7519 4.42117 17.4759 4.29433 17.1978 4.29973C17.5226 4.87532 17.1112 5.58872 16.4541 5.60138C16.615 5.88716 16.91 6.04728 17.2165 6.04728C17.9213 6.04724 18.3412 5.24454 17.9261 4.66473Z" fill="#080A25"></path><path d="M15.4443 2.25097C15.2889 2.14629 15.1119 2.09879 14.9377 2.1025C15.0942 2.3814 15.0921 2.73578 14.901 3.01867C14.7363 3.2632 14.4694 3.39734 14.1953 3.40347C14.3412 3.66238 14.6154 3.84933 14.9549 3.84933C15.2358 3.84933 15.5116 3.71433 15.6802 3.46394C15.9503 3.06418 15.8445 2.52101 15.4443 2.25097Z" fill="#080A25"></path><path d="M18.0546 13.3298C18.0196 13.3263 17.9849 13.3252 17.9506 13.3259C18.0225 13.4536 18.0632 13.5998 18.0632 13.7541C18.0632 14.2192 17.6905 14.618 17.2071 14.6276C17.3573 14.8936 17.6426 15.0733 17.9685 15.0733C18.4605 15.0733 18.8424 14.6702 18.8424 14.1994C18.8424 13.7592 18.5167 13.3806 18.0546 13.3298Z" fill="#080A25"></path><path d="M16.8273 15.8667C16.6537 15.724 16.4403 15.6588 16.2305 15.669C16.4307 16.0028 16.3904 16.4461 16.0974 16.7384C14.349 18.4816 11.9945 19.5031 9.50379 19.5727C7.91137 19.6172 6.39836 19.277 5.05371 18.6366C6.58344 19.5474 8.3818 20.0494 10.2951 19.996C12.7858 19.9264 15.1403 18.9049 16.8887 17.1617C17.2549 16.7965 17.2268 16.1952 16.8273 15.8667Z" fill="#080A25"></path></g><defs><clipPath id="clip0_781_2572"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>,

            },
            {
                label: 'Ongoing', 
                value: 'ongoing', 
                isSelected: false,
                svgIcon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.817 8.48479L11.4107 8.48413L11.4083 14.1095H17.0357V12.7032H12.8151L12.817 8.48479Z" fill="#080A25"></path><path d="M17.9148 6.34748L19.1426 4.59408L17.9906 3.7875L16.7637 5.53973C15.5906 4.84364 14.2496 4.40189 12.817 4.29239V2.85938H14.2232V1.45312H12.817H11.4107H10.0045V2.85938H11.4107V4.29239C9.97809 4.40189 8.63714 4.84364 7.464 5.53973L6.23709 3.7875L5.08519 4.59408L6.31294 6.34748C5.16863 7.28958 4.25672 8.50406 3.67678 9.89062L3.21937 11.2969C3.11109 11.7535 3.0367 12.2231 3.00005 12.7031L3 14.1094C3.0367 14.5894 3.11105 15.059 3.21933 15.5156L3.67713 16.9219C5.05741 20.222 8.31886 22.5469 12.1139 22.5469C17.154 22.5469 21.2545 18.4464 21.2545 13.4062C21.2545 10.5666 19.9528 8.02528 17.9148 6.34748ZM12.1139 21.1406C9.11423 21.1406 6.50798 19.4242 5.22567 16.9219H7.19199V15.5156H4.67189C4.54322 15.0623 4.45552 14.5921 4.41178 14.1094H5.78573V12.7031H4.41178C4.45552 12.2204 4.54322 11.7502 4.67189 11.2969H7.19199V9.89062H5.22567C6.50798 7.38834 9.11423 5.67188 12.1139 5.67188C16.3786 5.67188 19.8482 9.14152 19.8482 13.4062C19.8482 17.671 16.3786 21.1406 12.1139 21.1406Z" fill="#080A25"></path></svg>,
            },
            {
                label: 'Completed',
                value: 'completed', 
                isSelected: false,
                svgIcon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58187 0 0 3.58187 0 8C0 12.4181 3.58187 16 8 16C12.4181 16 16 12.4181 16 8C16 3.58187 12.4181 0 8 0ZM12.58 5.62719L12.5772 5.63C12.5759 5.63168 12.5742 5.63298 12.5722 5.63375C12.5702 5.63452 12.568 5.63474 12.5659 5.63438L5.92594 12.2744L3.24156 9.59C3.07282 9.42134 2.97799 9.19255 2.97793 8.95397C2.97787 8.71539 3.07259 8.48656 3.24125 8.31781C3.40991 8.14907 3.6387 8.05424 3.87728 8.05418C4.11586 8.05412 4.34469 8.14884 4.51344 8.3175L5.92531 9.72937L11.2934 4.36188C11.4617 4.19338 11.6897 4.09822 11.9278 4.09713C12.1659 4.09605 12.3948 4.18914 12.5646 4.35611C12.7344 4.52307 12.8313 4.75038 12.8341 4.98847C12.837 5.22657 12.7457 5.45616 12.58 5.62719Z" fill="#080A25"></path></svg>,
            },
        ],
        fullHackathons: appContext.hackathons,
        filteredHackathons: appContext.hackathons,
      }); 

  return (
    <div className="hackathon-filter">
        <HackathonSearch dispatchHackathon={dispatchHackathon}/>
        <HackathonTags hackathonState={hackathonState} dispatchHackathon={dispatchHackathon}/>
    </div>
  )
}

export default connectAppContext(HackathonFilter);