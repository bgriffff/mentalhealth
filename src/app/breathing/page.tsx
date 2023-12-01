import "../globals.css";

export default function breathing() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Box Breathing</h1>
      </div>
      <div className="wrapper">
        <div className="directions">
          <div className="message">Inhale</div>
          <div className="message">Hold</div>
          <div className="message">Exhale</div>
          <div className="message">Hold</div>
        </div>
        <div className="timer inhale">
          <div className="progress"></div>
          <div className="indicators">
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
          </div>
        </div>
        <div className="timer inhale-hold">
          <div className="indicators">
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
          </div>
        </div>
        <div className="timer exhale">
          <div className="indicators">
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
          </div>
        </div>
        <div className="timer exhale-hold">
          <div className="indicators">
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
