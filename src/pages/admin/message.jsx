import React from 'react'

export const Message = () => {
  return (
    <><div className="page-right-sidebar visible" id="chat-right-sidebar">
    <div className="page-right-sidebar-inner">
      <div className="right-sidebar-top">
        <div className="chat-top-info">
          <span className="chat-name">Noah</span>
          <span className="chat-state">2h ago</span>
        </div>
        <a
          href="javascript:void(0)"
          className="right-sidebar-toggle chat-sidebar-close float-right"
          data-sidebar-id="chat-right-sidebar"
        >
          <i className="icon-keyboard_arrow_right" />
        </a>
      </div>
      <div className="right-sidebar-content">
        <div className="right-sidebar-chat slimscroll">
          <div className="chat-bubbles">
            <div className="chat-start-date">02/03/2019 5:58PM</div>
            <div className="chat-bubble them">
              <div className="chat-bubble-img-container">
                <img src="../img/avatars/chat06.jpg" alt="" />
              </div>
              <div className="chat-bubble-text-container">
                <span className="chat-bubble-text">Hello</span>
              </div>
            </div>
            <div className="chat-bubble me">
              <div className="chat-bubble-text-container">
                <span className="chat-bubble-text">Hello!</span>
              </div>
            </div>
            <div className="chat-start-date">03/02/2019 5:18AM</div>
            <div className="chat-bubble me">
              <div className="chat-bubble-text-container">
                <span className="chat-bubble-text">lorem</span>
              </div>
            </div>
            <div className="chat-bubble them">
              <div className="chat-bubble-img-container">
                <img src="../img/avatars/chat07.jpg" alt="" />
              </div>
              <div className="chat-bubble-text-container">
                <span className="chat-bubble-text">ipsum dolor sit amet</span>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="chat-write">
          <form className="form-horizontal" action="">
            <input
              type="text"
              className="form-control"
              placeholder="Say something"
            />
          <button className='butn'>send</button>
          </form>
        </div>
    </div>
  </div>
  </>
  )
}
