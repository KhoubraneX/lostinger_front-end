import React from 'react'

export const Messages = () => {
  return (
    <><div className="page-right-sidebar visible" id="main-right-sidebar">
    <div className="page-right-sidebar-inner">
      <div className="right-sidebar-top">
        <div className="right-sidebar-tabs">
          {/* nav tabs */}
          <ul className="nav nav-tabs" role="tablist">
            <li role="presentation" className="active" id="chat-tab">
              <a href="#chat" aria-controls="chat" role="tab" data-toggle="tab">
                chat
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-sidebar-content">
        {/* start tab panes */}
        <div className="tab-content">
          <div className="tab-pane active" id="chat">
            <div className="chat-list">
              <span className="chat-title">Recent</span>
              <a
                href=""
                className="right-sidebar-toggle chat-item unread"
                data-sidebar-id="chat-right-sidebar"
              >
                <div className="user-avatar">
                  <img src="../img/avatars/chat01.jpg" alt="" />
                </div>
                <div className="chat-info">
                  <span className="chat-author">David</span>
                  <span className="chat-text">where u at?</span>
                  <span className="chat-time">08:50</span>
                </div>
              </a>
              <a
                href=""
                className="right-sidebar-toggle chat-item unread active-user"
                data-sidebar-id="chat-right-sidebar"
              >
                <div className="user-avatar">
                  <img src="../img/avatars/chat02.jpg" alt="" />
                </div>
                <div className="chat-info">
                  <span className="chat-author">Daisy</span>
                  <span className="chat-text">Daisy sent a photo.</span>
                  <span className="chat-time">11:34</span>
                </div>
              </a>
            </div>
            <div className="chat-list">
              <span className="chat-title">Older</span>
              <a
                href=""
                className="right-sidebar-toggle chat-item"
                data-sidebar-id="chat-right-sidebar"
              >
                <div className="user-avatar">
                  <img src="../img/avatars/chat03.jpg" alt="" />
                </div>
                <div className="chat-info">
                  <span className="chat-author">Tom</span>
                  <span className="chat-text">You: ok</span>
                  <span className="chat-time">2d</span>
                </div>
              </a>
              <a
                href=""
                className="right-sidebar-toggle chat-item active-user"
                data-sidebar-id="chat-right-sidebar"
              >
                <div className="user-avatar">
                  <img src="../img/avatars/chat04.jpg" alt="" />
                </div>
                <div className="chat-info">
                  <span className="chat-author">Anna</span>
                  <span className="chat-text">asdasdasd</span>
                  <span className="chat-time">4d</span>
                </div>
              </a>
              <a
                href=""
                className="right-sidebar-toggle chat-item active-user"
                data-sidebar-id="chat-right-sidebar"
              >
                <div className="user-avatar">
                  <img src="../img/avatars/chat05.jpg" alt="" />
                </div>
                <div className="chat-info">
                  <span className="chat-author">Liza</span>
                  <span className="chat-text">asdasdasd</span>
                  <span className="chat-time">&nbsp;</span>
                </div>
              </a>
              <a
                href=""
                className="load-more-messages"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Load More"
              >
                •••
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}
