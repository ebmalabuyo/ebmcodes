import Link from 'next/link';
import React from 'react'

type LinkButtonProps = {
    dark: boolean, // color
    label: string, // what its going to say on button
    direct: string, // page to redirect or redirec to file 
    resume: boolean // either Link or a
}

export default function LinkButton({dark, label, direct, resume} : LinkButtonProps) {
  let ColorStyles = "";
  const defaultStyle = "p-4 rounded-md max-w-[400px] md:w-auto text-center" + " ";

  // DETERMINES IF A DARK COLORED BG OR WHITE
  if (dark) {
    ColorStyles = "text-lightish bg-darkish"
  }
  else{
    ColorStyles = "text-black dark:bg-darkish bg-lightish"
  }


  // DETERMINES IF a tag FOR RESUME OR LINK TAG FOR LINKS
  if (resume) 
  return (
    <a className={defaultStyle + ColorStyles}  target='_blank' href={direct}>{label}</a>
  )
  else{
    return <Link href={direct} className={defaultStyle + ColorStyles}>{label}</Link>
  }
}
