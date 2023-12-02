import {
    ClockIcon,
    PaperAirplaneIcon,
    ReceiptRefundIcon,
    DocumentIcon,
    PlusCircleIcon,
    ListBulletIcon,
    DocumentTextIcon,
    CommandLineIcon,
    TicketIcon,
    HeartIcon,
    GiftIcon
  } from "@heroicons/react/24/outline"
  
  export const navigationLinks = [
    {
      name: "Transaction",
      subLinks: [
        { 
          id: 1,
          name: "Transaction Logs",
          description: "Log and manage your work time",
          link: "/transaction",
          color: "bg-teal-300 dark:bg-teal-700",
          icon: <ClockIcon />,
        },
        {
          id: 2,
          name: "Transaction Report",
          description: "Manage your transaction reports",
          link: "/transaction",
          color: "bg-indigo-300 dark:bg-indigo-700",
          icon: <DocumentIcon />,
        },
        {
          id: 3,
          name: "Send Transaction",
          description: "Add and manage your vacation",
          link: "/transaction",
          color: "bg-amber-300 dark:bg-amber-700",
          icon: <PaperAirplaneIcon />,
        },
        {
          id: 4,
          name: "Transaction Invoice",
          description: "Add and manage your invoices",
          link: "/invoices",
          color: "bg-rose-300 dark:bg-rose-700",
          icon: <ReceiptRefundIcon />,
        }
      ]
    },
    {
      name: "Data",
      subLinks: [
        {
          id: 21,
          name: "Create Data",
          description: "Create a new data list",
          link: "/data",
          color: "bg-green-300 dark:bg-green-700",
          icon: <PlusCircleIcon />,
        },
        {
          id: 22,
          name: "List Data",
          description: "List all datas from APIs",
          link: "/data",
          color: "bg-blue-300 dark:bg-blue-700",
          icon: <ListBulletIcon />,
        },
        {
          id: 23,
          name: "Archive Data",
          description: "Manage all archived data",
          link: "/data",
          color: "bg-red-300 dark:bg-red-700",
          icon: <ReceiptRefundIcon />,
        }
      ]
    },
    {
      name: "Company",
      subLinks: [
        {
          id: 31,
          name: "Paperwork",
          description: "Manage documents and consents",
          link: "/company-paperwork",
          color: "bg-teal-300 dark:bg-teal-700",
          icon: <DocumentTextIcon />
        },
        {
          id: 32,
          name: "Licenses",
          description: "Manage your software licenses and subscriptions",
          link: "/company-licenses",
          color: "bg-pink-300 dark:bg-pink-700",
          icon: <CommandLineIcon />
        },
        {
          id: 33,
          name: "Jira tickets",
          description: "Create and edit your Jira tickets",
          link: "/company-jira-tickets",
          color: "bg-sky-300 dark:bg-sky-700",
          icon: <TicketIcon />
        },
        {
          id: 34,
          name: "Perks and benefits",
          description: "Manage your company perks and benefits",
          link: "/company-perks-and-benefits",
          color: "bg-green-300 dark:bg-green-700",
          icon: <GiftIcon />
        },
        {
          id: 35,
          name: "Referrals and rewards",
          description: "Manage your company referrals and rewards",
          link: "/company-referrals-and-rewards",
          color: "bg-red-300 dark:bg-red-700",
          icon: <HeartIcon />
        }
      ],
      extraLinks: [
        {
          id: 36,
          name: "Company details",
          link: "/company-details"
        },
        {
          id: 37,
          name: "Company structure",
          link: "/company-structure"
        },
        {
          id: 38,
          name: "Company blog",
          link: "/company-blog"
        },
        {
          id: 39,
          name: "Company social media",
          link: "/company-social-media"
        }
      ]
    }
  ]
  