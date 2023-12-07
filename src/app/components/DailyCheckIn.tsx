"use client";
import React, { useEffect, useState } from "react";

export default function DailyCheckIn() {
  const hasModalBeenClosed = localStorage.getItem("modalClosed") === "true";
  const [isModalOpen, setIsModalOpen] = useState(!hasModalBeenClosed);

  useEffect(() => {
    if (isModalOpen) {
      const modal = document.getElementById("my_modal_1");
      if (modal instanceof HTMLDialogElement) {
        modal.showModal();
      }
    }
  }, [isModalOpen]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    localStorage.setItem("modalClosed", "true");
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isModalOpen ? "" : "hidden"
      }`}
    >
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-black">Daily Check-in</h3>
          <br></br>
          {/* All of the button emojis */}
          <div className="grid grid-cols-6 gap-4">
            <div
              className=" btn w-16 h-16 rounded-lg flex items-center justify-center bg-purple-600 hover:bg-purple-500 shadow-lg"
              onClick={handleCloseModal}
            >
              <div className="text-white">Happy</div>
              <HappyIcon />
            </div>
            <div
              className=" btn w-16 h-16 rounded-lg flex items-center justify-center bg-teal-500 hover:bg-teal-400 shadow-lg"
              onClick={handleCloseModal}
            >
              <div className="text-white">Relaxed</div>
              <RelaxedIcon />
            </div>
            <div
              className=" btn w-16 h-16 rounded-lg flex items-center justify-center bg-orange-500 hover:bg-orange-400 shadow-lg"
              onClick={handleCloseModal}
            >
              <div className="text-white">Grateful</div>
              <GratitudeIcon />
            </div>
            <div
              className=" btn w-16 h-16 rounded-lg flex items-center justify-center bg-sky-600 hover:bg-sky-500 shadow-lg"
              onClick={handleCloseModal}
            >
              <div className="text-white">Sad</div>
              <SadIcon />
            </div>
            <div
              className=" btn w-16 h-16 rounded-lg flex items-center justify-center bg-red-600 hover:bg-red-500 shadow-lg"
              onClick={handleCloseModal}
            >
              <div className="text-white">Angry</div>
              <AngryIcon />
            </div>
            <div
              className=" btn w-16 h-16 rounded-lg flex items-center justify-center bg-success-content hover:bg-slate-700 shadow-lg"
              onClick={handleCloseModal}
            >
              <div className="text-white">Tired</div>
              <TiredIcon />
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn" onClick={handleCloseModal}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

// Emojis
function HappyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="none"
      viewBox="0 0 36 36"
    >
      <path
        fill="#FFCC4D"
        d="M18 36c9.941 0 18-8.059 18-18S27.941 0 18 0 0 8.059 0 18s8.059 18 18 18z"
      ></path>
      <path
        fill="#664500"
        d="M18 21c-3.623 0-6.027-.422-9-1-.679-.131-2 0-2 2 0 4 4.595 9 11 9 6.404 0 11-5 11-9 0-2-1.321-2.132-2-2-2.973.578-5.377 1-9 1z"
      ></path>
      <path fill="#fff" d="M9 22s3 1 9 1 9-1 9-1-2 4-9 4-9-4-9-4z"></path>
      <path
        fill="#664500"
        d="M12 17c1.38 0 2.5-1.567 2.5-3.5S13.38 10 12 10s-2.5 1.567-2.5 3.5S10.62 17 12 17zM24 17c1.38 0 2.5-1.567 2.5-3.5S25.38 10 24 10s-2.5 1.567-2.5 3.5S22.62 17 24 17z"
      ></path>
    </svg>
  );
}

function RelaxedIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="none"
      viewBox="0 0 36 36"
    >
      <path
        fill="#FFCC4D"
        d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18z"
      ></path>
      <path
        fill="#664500"
        d="M28.312 15.612a.503.503 0 00-.61-.014c-.012.009-1.261.902-3.702.902-2.44 0-3.69-.893-3.7-.9a.5.5 0 00-.757.603c.06.135 1.5 3.297 4.457 3.297 2.958 0 4.397-3.162 4.457-3.297a.498.498 0 00-.145-.591zm-12.61-.014c-.012.009-1.26.902-3.702.902-2.441 0-3.69-.893-3.7-.9a.5.5 0 00-.757.603c.06.135 1.5 3.297 4.457 3.297 2.958 0 4.397-3.162 4.457-3.297a.501.501 0 00-.755-.605zM29.001 13a.998.998 0 01-.801-.4c-2.592-3.456-6.961-2.628-7.004-2.62a.998.998 0 01-1.177-.784 1.001 1.001 0 01.784-1.177c.231-.047 5.657-1.072 8.996 3.38A1 1 0 0129.001 13zM6.999 13a1 1 0 01-.799-1.6c3.339-4.454 8.766-3.426 8.996-3.38a1.001 1.001 0 01-.39 1.962C14.62 9.947 10.37 9.174 7.8 12.6a.998.998 0 01-.801.4zm16.255 10.577a.513.513 0 00-.597.06c-.01.008-1.013.863-4.657.863-3.641 0-4.646-.854-4.646-.854a.5.5 0 00-.838.475c.01.044 1.144 4.379 5.484 4.379s5.474-4.335 5.485-4.379a.497.497 0 00-.231-.544z"
      ></path>
    </svg>
  );
}

function GratitudeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="none"
      viewBox="0 0 36 36"
    >
      <path
        fill="#FFCC4D"
        d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18z"
      ></path>
      <path
        fill="#664500"
        d="M18 21.849c-2.966 0-4.935-.346-7.369-.819-.557-.106-1.638 0-1.638 1.638 0 3.275 3.763 7.369 9.007 7.369s9.007-4.094 9.007-7.369c0-1.638-1.082-1.745-1.638-1.638-2.434.473-4.402.819-7.369.819z"
      ></path>
      <path
        fill="#DD2E44"
        d="M16.65 3.281a4.666 4.666 0 00-8.884.254 4.666 4.666 0 00-4.225-.58A4.67 4.67 0 00.692 8.911c.122.344.284.663.472.958 1.951 3.582 7.588 6.1 11.001 6.131 2.637-2.167 5.446-7.665 4.718-11.677a4.712 4.712 0 00-.233-1.042zm2.7 0a4.67 4.67 0 015.956-2.85 4.67 4.67 0 012.929 3.104 4.666 4.666 0 014.225-.58 4.671 4.671 0 012.85 5.956 4.72 4.72 0 01-.473.958c-1.951 3.582-7.588 6.1-11.002 6.131-2.637-2.167-5.445-7.665-4.717-11.677.037-.348.112-.698.232-1.042z"
      ></path>
    </svg>
  );
}

function SadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="none"
      viewBox="0 0 36 36"
    >
      <path
        fill="#FFCC4D"
        d="M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18z"
      ></path>
      <path
        fill="#664500"
        d="M11.5 20.5c1.38 0 2.5-1.567 2.5-3.5s-1.12-3.5-2.5-3.5S9 15.067 9 17s1.12 3.5 2.5 3.5zM24.5 20.5c1.38 0 2.5-1.567 2.5-3.5s-1.12-3.5-2.5-3.5S22 15.067 22 17s1.12 3.5 2.5 3.5zM5.999 13.5a1 1 0 01-.799-1.6c3.262-4.35 7.616-4.4 7.8-4.4a1 1 0 01.004 2c-.155.002-3.568.086-6.204 3.6a.998.998 0 01-.801.4zm24.002 0a.998.998 0 01-.801-.4c-2.641-3.521-6.061-3.599-6.206-3.6a1.002 1.002 0 01-.991-1.005A.997.997 0 0123 7.5c.184 0 4.537.05 7.8 4.4a1 1 0 01-.799 1.6zm-6.516 14.879C23.474 28.335 22.34 24 18 24s-5.474 4.335-5.485 4.379a.496.496 0 00.232.544.51.51 0 00.596-.06C13.352 28.855 14.356 28 18 28c3.59 0 4.617.83 4.656.863a.5.5 0 00.829-.484z"
      ></path>
      <path
        fill="#5DADEC"
        d="M16 31a5 5 0 01-5 5 5 5 0 01-5-5c0-2.762 4-10 5-10s5 7.238 5 10z"
      ></path>
    </svg>
  );
}

function AngryIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="none"
      viewBox="0 0 36 36"
    >
      <path
        fill="#FFCC4D"
        d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18z"
      ></path>
      <path
        fill="#664500"
        d="M20.001 13a1 1 0 01-.987-1.165C19.407 9.471 21.584 5 27 5a1 1 0 110 2c-5.095 0-5.979 4.954-6.014 5.165a1 1 0 01-.985.835zm-4.002 0a1 1 0 01-.985-.833C14.977 11.957 14.059 7 9 7a1 1 0 010-2c5.416 0 7.592 4.471 7.986 6.835A1 1 0 0115.999 13zm-4.589 4.892c-2.335 0-3.87-.997-3.964-1.06a1 1 0 011.11-1.664c.099.064 2.602 1.636 5.998-.062a1 1 0 01.895 1.789c-1.495.746-2.868.997-4.039.997zm13.181 0c-1.172 0-2.545-.251-4.038-.998a1 1 0 01.895-1.789c3.4 1.7 5.899.126 6.004.059a1.004 1.004 0 011.382.289.997.997 0 01-.278 1.379c-.096.063-1.631 1.06-3.965 1.06zM26.001 27a.998.998 0 01-.801-.4c-.025-.034-2.782-3.6-7.2-3.6-4.417 0-7.174 3.566-7.202 3.603a1.003 1.003 0 01-1.4.194A.998.998 0 019.2 25.4c.135-.18 3.362-4.4 8.8-4.4 5.438 0 8.665 4.221 8.8 4.4a.998.998 0 01-.799 1.6z"
      ></path>
      <path
        fill="#F5F8FA"
        d="M15.391 20.08a.997.997 0 00-1.239.39l-5 8A1 1 0 0010 30h3a.999.999 0 00.97-.758l2-8a1 1 0 00-.579-1.162zm11.457 8.39l-5-8a.998.998 0 00-1.817.772l2 8c.111.446.51.758.969.758h3a1 1 0 00.848-1.53z"
      ></path>
      <path
        fill="#E1E8ED"
        d="M31.982 30.178c.003-.06.018-.117.018-.178 0-1.656-1.344-3-3-3a2.996 2.996 0 00-2.473 1.305A4 4 0 1025 36a3.994 3.994 0 003.29-1.731A2.995 2.995 0 0034 33a2.99 2.99 0 00-2.018-2.822zM11 28c-.542 0-1.056.11-1.527.305A2.996 2.996 0 007 27c-1.656 0-3 1.344-3 3 0 .061.014.118.018.178A2.99 2.99 0 002 33a3 3 0 003 3 2.991 2.991 0 002.709-1.731A3.996 3.996 0 0011 36a4 4 0 000-8z"
      ></path>
    </svg>
  );
}

function TiredIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="none"
      viewBox="0 0 36 36"
    >
      <path
        fill="#FFCC4D"
        d="M18 36c9.941 0 18-8.059 18-18S27.941 0 18 0 0 8.059 0 18s8.059 18 18 18z"
      ></path>
      <path
        fill="#664500"
        d="M18 29a3 3 0 100-6 3 3 0 000 6zM17.312 16.612a.501.501 0 00-.61-.014c-.012.009-1.26.902-3.702.902-2.441 0-3.69-.893-3.7-.9a.5.5 0 00-.757.603c.06.135 1.5 3.297 4.457 3.297 2.958 0 4.397-3.162 4.457-3.297a.498.498 0 00-.145-.591zm10 0a.5.5 0 00-.61-.014c-.012.009-1.261.902-3.702.902-2.44 0-3.69-.893-3.7-.9a.5.5 0 00-.757.603c.06.135 1.5 3.297 4.457 3.297 2.958 0 4.397-3.162 4.457-3.297a.498.498 0 00-.145-.591z"
      ></path>
      <path
        fill="#FFAC33"
        d="M34.43 12.534c.004-.044.023-.077.023-.123 0-.754-.548-1.188-1.225-1.188h-3.582l4.279-5.993c.206-.283.282-.453.282-.811 0-.735-.64-.849-.885-.849h-5.349l-.032-.688s-1.409.831-1.503.888a1.174 1.174 0 00-.505.987c0 .754.546 1.187 1.225 1.187h3.149l-4.261 5.993c-.094.151-.244.433-.244.735 0 .622.508.924 1.111.924h6.315c.258 0 .515-.076.681-.176l1.503-.888h-.982v.002z"
      ></path>
      <path
        fill="#2A6797"
        d="M31.771 5.084h-3.149c-.679 0-1.225-.433-1.225-1.187s.546-1.188 1.225-1.188h6.164c.245 0 .885.113.885.848 0 .358-.076.528-.282.811l-4.279 5.993h3.582c.677 0 1.225.433 1.225 1.187s-.548 1.187-1.225 1.187h-6.315c-.603 0-1.111-.302-1.111-.924 0-.302.15-.584.244-.735l4.261-5.992z"
      ></path>
      <path
        fill="#FFAC33"
        d="M24.886 7.48c.003-.033.018-.058.018-.092 0-.564-.41-.889-.917-.889h-2.682l3.203-4.487c.156-.212.212-.339.212-.606 0-.55-.479-.635-.663-.635h-4.004l-.024-.515s-1.055.622-1.125.665a.882.882 0 00-.378.739c0 .564.409.889.917.889H21.8l-3.19 4.487c-.07.113-.183.324-.183.55 0 .466.38.691.832.691h4.728c.193 0 .385-.057.51-.132l1.125-.665h-.736z"
      ></path>
      <path
        fill="#2A6797"
        d="M22.896 1.903h-2.357c-.508 0-.917-.324-.917-.889 0-.564.409-.889.917-.889h4.615c.184 0 .663.085.663.635 0 .268-.057.395-.211.607l-3.203 4.487h2.682c.505 0 .915.324.915.889s-.41.889-.917.889h-4.728c-.452 0-.832-.226-.832-.691 0-.226.113-.437.183-.55l3.19-4.488z"
      ></path>
      <path
        fill="#FFAC33"
        d="M17.741 10.425c.003-.028.015-.049.015-.079 0-.483-.351-.761-.785-.761h-2.295l2.742-3.84c.132-.181.181-.29.181-.519 0-.471-.41-.544-.567-.544h-3.427l-.021-.441-.963.569a.754.754 0 00-.324.633c0 .483.35.761.785.761h2.017l-2.73 3.84c-.06.097-.157.278-.157.471 0 .399.326.592.712.592h4.047c.165 0 .33-.049.436-.113l.963-.569h-.629z"
      ></path>
      <path
        fill="#2A6797"
        d="M16.037 5.652H14.02c-.435 0-.785-.278-.785-.761s.35-.761.785-.761h3.95c.157 0 .567.073.567.544 0 .229-.048.338-.181.519l-2.742 3.84h2.295c.434 0 .785.278.785.761s-.351.761-.785.761h-4.047c-.386 0-.712-.193-.712-.592 0-.193.096-.374.157-.471l2.73-3.84z"
      ></path>
    </svg>
  );
}
