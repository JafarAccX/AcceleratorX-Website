import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface AppDownloadPOPProps {
  delayMs?: number // how long to wait before showing the popup
  courseName?: string // optional course name to pass to enrollment
}

const AppDownloadPOP: React.FC<AppDownloadPOPProps> = ({ delayMs = 2000 }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Don't run on server
    if (typeof window === 'undefined') return

    const timer = window.setTimeout(() => {
      setVisible(true)
    }, delayMs)

    return () => clearTimeout(timer)
  }, [delayMs])

  const handleClose = () => setVisible(false)


  return (
    <>
      {/* 
        <AnimatePresence>
          {visible && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
              role="dialog"
              aria-modal="true"
            >
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                className="relative max-w-4xl w-full"
              >
                <button
                  onClick={handleClose}
                  aria-label="Close Christmas banner popup"
                  className="absolute -top-4 -right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white text-gray-800 hover:text-gray-900 shadow-lg transition-all hover:scale-110"
                >
                  <X className="w-6 h-6" />
                </button>

                <div
                  className="cursor-pointer rounded-2xl overflow-hidden shadow-2xl"
                  onClick={handleBannerClick}
                >
                  <img
                    src="/redesign/christmas/cristmas-banner.jpg"
                    alt="AcceleratorX Christmas Sale - 40% Off"
                    className="hidden md:block w-full h-auto object-cover"
                  />

                  <img
                    src="/redesign/christmas/cristmas-banner-mobile.png"
                    alt="AcceleratorX Christmas Sale - 40% Off"
                    className="block md:hidden w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      */}


      <AnimatePresence>
        {visible && (
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              const horizontal = info.offset.x
              const velocity = Math.abs(info.velocity.x)
              const threshold = 120
              const velocityThreshold = 800
              if (Math.abs(horizontal) > threshold || velocity > velocityThreshold) {
                setVisible(false)
              }
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.28 }}
            className="fixed right-6 bottom-6 z-50 max-w-sm w-[90vw] sm:w-[360px] cursor-grab"
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-gradient-to-br from-[#10204a] via-black to-[#10204a] border border-white/10 rounded-2xl shadow-2xl p-4 text-white backdrop-blur-sm">
              <div className="flex flex-col items-start justify-center gap-3 mt-10">
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-blue-700 flex items-center justify-center">
                    <img
                      src="/app/accapplogo.png"
                      alt="AcceleratorX app logo for ai integrated digital marketing"
                      className="rounded-md object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-white font-semibold text-lg">Master AI, Product, Data & Marketing.</h4>
                  </div>
                </div>
                <p className="text-sm text-white/80 mt-1">Download our app and access 3,000+ AI jobs curated for you.</p>
                <button
                  onClick={handleClose}
                  aria-label="Close app popup"
                  className="p-2 absolute top-4 right-4 rounded-md text-white/80 hover:text-white hover:bg-white/5"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="flex-1 w-full">

                  <div className="mt-4 flex gap-4 items-center justify-center">
                    <a
                      href="https://apps.apple.com/in/app/acceleratorx-learning/id6753216468"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                      aria-label="Download on the App Store"
                    >
                      <img
                        src="/app/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                        alt="Download on the App Store"
                        className="block h-12 max-w-[110px] object-contain"
                      />
                    </a>

                    <a
                      href="https://play.google.com/store/apps/details?id=com.acceleratorx.acceleratorx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                      aria-label="Get it on Google Play"
                    >
                      <img
                        src="/app/GetItOnGooglePlay_Badge_Digital_color_Finnish.png"
                        alt="Get it on Google Play"
                        className="block h-12 max-w-[170px] object-contain"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default AppDownloadPOP
