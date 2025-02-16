import { useState } from 'react';
import { SocialLink } from 'shared/types';
import styles from './index.module.scss';
import presetIcons from './presetIcons';

interface ILinkContentComp {
  link: SocialLink;
  popperStyle?: Record<string, unknown>;
}

export const LinkContent = (props: ILinkContentComp) => {
  const { link, popperStyle = {} } = props;
  const { icon, mode = 'link', content } = link;
  const IconComp =
    typeof icon === 'object' ? (
      // eslint-disable-next-line react/no-danger
      <div dangerouslySetInnerHTML={{ __html: icon.svg }}></div>
    ) : (
      presetIcons[icon as keyof typeof presetIcons]
    );

  const [contentVisible, setContentVisible] = useState(false);
  const mouseEnterIcon = () => {
    setContentVisible(true);
  };
  const mouseLeavePopper = () => {
    setContentVisible(false);
  };

  if (mode === 'link') {
    return (
      <a key={content} href={content} target="_blank" rel="noopener noreferrer">
        <div className={`${styles.socialLinksIcon}`}>{IconComp}</div>
      </a>
    );
  }
  if (mode === 'text') {
    return (
      <div
        className={`${styles.socialLinksIcon}`}
        cursor="pointer"
        pos="relative"
        onMouseEnter={mouseEnterIcon}
        onMouseLeave={mouseLeavePopper}
      >
        {IconComp}
        {contentVisible ? (
          <div
            z="1"
            p="3"
            w="50"
            pos="absolute right-0"
            border="rounded-xl"
            bg="white"
            style={{
              boxShadow: 'var(--island-shadow-3)',
              border: '1px solid var(--modern-c-divider-light)',
              ...popperStyle,
            }}
          >
            <div text="ml">{content}</div>
          </div>
        ) : null}
      </div>
    );
  }
  if (mode === 'img') {
    return (
      <div
        className={`${styles.socialLinksIcon}`}
        cursor="pointer"
        pos="relative"
        onMouseEnter={mouseEnterIcon}
        onMouseLeave={mouseLeavePopper}
      >
        {IconComp}
        {contentVisible ? (
          <div
            z="1"
            p="3"
            w="50"
            pos="absolute right-0"
            border="rounded-xl"
            bg="white"
            className="break-all"
            style={{
              boxShadow: 'var(--modern-shadow-3)',

              ...popperStyle,
            }}
          >
            <img src={content} alt="img" />
          </div>
        ) : null}
      </div>
    );
  }

  return <div></div>;
};
