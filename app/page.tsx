'use client'

import { useState, useEffect } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [scene, setScene] = useState(0)
  const [showGirl, setShowGirl] = useState(false)
  const [showShop, setShowShop] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => setShowGirl(true), 500)
    const timer2 = setTimeout(() => setShowShop(true), 1000)
    const timer3 = setTimeout(() => setShowMessage(true), 1500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  const nextScene = () => {
    setScene((prev) => (prev + 1) % 3)
  }

  return (
    <main className={styles.main}>
      <div className={styles.snowflakes}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={styles.snowflake} style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}>❄</div>
        ))}
      </div>

      <div className={styles.container}>
        {scene === 0 && (
          <div className={styles.sceneContainer}>
            <div className={`${styles.street} ${showShop ? styles.visible : ''}`}>
              <div className={styles.cakeShop}>
                <div className={styles.shopSign}>
                  <span className={styles.shopName}>Sweet Dreams Bakery</span>
                  <div className={styles.lights}>
                    {[...Array(10)].map((_, i) => (
                      <div key={i} className={styles.light}></div>
                    ))}
                  </div>
                </div>
                <div className={styles.window}>
                  <div className={styles.cakeDisplay}>
                    <div className={styles.cake}>🎂</div>
                    <div className={styles.cake}>🧁</div>
                    <div className={styles.cake}>🍰</div>
                    <div className={styles.cake}>🎂</div>
                    <div className={styles.cake}>🧁</div>
                    <div className={styles.cake}>🍰</div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.girl} ${showGirl ? styles.visible : ''}`}>
              <div className={styles.girlCharacter}>
                <div className={styles.head}>
                  <div className={styles.hair}></div>
                  <div className={styles.face}>
                    <div className={styles.eyes}>
                      <div className={styles.eye}>
                        <div className={styles.sparkle}></div>
                      </div>
                      <div className={styles.eye}>
                        <div className={styles.sparkle}></div>
                      </div>
                    </div>
                    <div className={styles.cheeks}>
                      <div className={styles.cheek}></div>
                      <div className={styles.cheek}></div>
                    </div>
                    <div className={styles.smile}></div>
                  </div>
                </div>
                <div className={styles.body}>
                  <div className={styles.dress}></div>
                  <div className={styles.patch}>✨</div>
                </div>
              </div>
            </div>

            {showMessage && (
              <div className={styles.thoughtBubble}>
                <p className={styles.thought}>Those cakes look so beautiful...</p>
                <p className={styles.thought}>I wish I could taste one someday 💭</p>
              </div>
            )}
          </div>
        )}

        {scene === 1 && (
          <div className={styles.sceneContainer}>
            <div className={styles.dreamScene}>
              <div className={styles.dreamCloud}>
                <h2 className={styles.dreamTitle}>In her dreams...</h2>
                <div className={styles.floatingCakes}>
                  <div className={styles.floatingCake}>🎂</div>
                  <div className={styles.floatingCake}>🧁</div>
                  <div className={styles.floatingCake}>🍰</div>
                  <div className={styles.floatingCake}>🎂</div>
                  <div className={styles.floatingCake}>🍩</div>
                  <div className={styles.floatingCake}>🍪</div>
                </div>
                <p className={styles.dreamText}>
                  She imagines a world filled with sweetness,<br/>
                  where every child can enjoy a piece of cake,<br/>
                  and no one has to look through windows<br/>
                  at happiness they cannot reach.
                </p>
              </div>
            </div>
          </div>
        )}

        {scene === 2 && (
          <div className={styles.sceneContainer}>
            <div className={styles.hopeScene}>
              <div className={styles.heart}>💝</div>
              <h2 className={styles.hopeTitle}>Hope Lives Here</h2>
              <p className={styles.hopeText}>
                Every act of kindness,<br/>
                every shared smile,<br/>
                every moment of compassion<br/>
                brings us closer to a world<br/>
                where dreams come true for everyone.
              </p>
              <div className={styles.stars}>
                {[...Array(15)].map((_, i) => (
                  <div key={i} className={styles.star} style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`
                  }}>⭐</div>
                ))}
              </div>
            </div>
          </div>
        )}

        <button className={styles.nextButton} onClick={nextScene}>
          {scene < 2 ? 'Continue Story →' : '↻ Restart'}
        </button>
      </div>
    </main>
  )
}
