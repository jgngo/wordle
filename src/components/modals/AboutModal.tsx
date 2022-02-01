import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is an open source clone of the game Wordle forked from -{' '}
        <a
          href="https://github.com/hannahcode/wordle"
          className="underline font-bold"
        >
          hannahcode
        </a>. Current source is <a
          href="https://github.com/jgngo/wordle"
          className="underline font-bold"
        >
          jgngo
        </a> 
        
        <p className="py-4">Cebuano word list from <a className="underline font-bold" href="https://tagalog.pinoydictionary.com/">https://cebuano.pinoydictionary.com</a> 
        </p>

        <p className="py-4"><a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
        >
          Play original Wordle here
        </a>
        </p>
      </p>
    </BaseModal>
  )
}
