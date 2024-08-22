export interface BlockCardComponentProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
};


export interface CustomIconComponentProps {
    svg: string;
    iconSize?: string;
    iconColor?: string;
    classes?: string;
    onAction?: () => void;
};


export interface CustomButtonComponentProps {
    label: string;
    icon?: string;
    onClick: () => void;
    textColor?: string;
    bgColor?: string;
    hoverBgColor?: string;
    hoverTextColor?: string;
    disabled?: boolean;
    loading?: boolean;
    paddingX?: string;
    paddingY?: string;
    textSize?: string;
    rounded?: string;
    iconSize?: string;
    border?: string;
    fontWeight?: string;
};