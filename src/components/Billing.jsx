import { apple, bill, google } from "../assets"
import styles, {layout} from "../style"

const Billing = () => (
    <section id="product" className={layout.sectionImgReverse}>
      <div className={layout.sectionImgReverse}>
        <img  src={bill} alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"/>
        <div className="absolute z-[3] -left-1/2
        top-0 w-[50%] h-[50%] rounded-full
        white__gradient"/>
        <div className="absolute z-[0] -left-1/2
        bottom-0 w-[50%] h-[50%] rounded-full
        pink__gradient"/>
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden"/>
          billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
           Hna khsna nktbo fih :Edit your dhds dkpsklqldkkle hjfk
          dskjdjs hdsk ldsk jdsk hhdsjaoei dorma
          jsdjsl jadqdqirk qkqkdk tard djsjda
          dsak small birht datdk dift chonsn.
        </p>

        <div className="flex flex-wrap flex-row
        sm:mt-10 mt-6">
            <img src={apple} alt="appel_store" className="w-[128px]
            object-contain mr-5 h-[42px] cursor-pointer"/>
            <img src={google} alt="google_play" className="w-[128px]
            object-contain h-[42px] cursor-pointer"/>
        </div>
      </div>
    </section>
)

export default Billing