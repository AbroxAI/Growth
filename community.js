<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>GrowthPilot – Community</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background: #f5f7fb;
            color: #1a1a2e;
            padding: 16px;
            min-height: 100vh;
            padding-bottom: 120px;
        }

        .community-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            padding: 0 4px;
        }

        .community-header h1 {
            font-size: 24px;
            font-weight: 700;
            color: #1a1a2e;
        }

        .community-header .member-count {
            font-size: 14px;
            color: #6b7280;
            background: #fff;
            padding: 6px 16px;
            border-radius: 30px;
            border: 1px solid #eef2f6;
            box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }

        #communityFeed {
            display: flex;
            flex-direction: column;
            gap: 16px;
            max-width: 800px;
            margin: 0 auto;
        }

        .community-post {
            display: flex;
            gap: 14px;
            background: #ffffff;
            padding: 18px 20px;
            border-radius: 20px;
            border: 1px solid #eef2f6;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
            transition: transform 0.15s ease;
            animation: fadeUp 0.4s ease;
        }

        .community-post:hover {
            transform: translateY(-2px);
        }

        @keyframes fadeUp {
            from { opacity: 0; transform: translateY(16px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .post-avatar {
            flex-shrink: 0;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            overflow: hidden;
            background: #e8ecf1;
        }

        .post-avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .post-avatar.user-avatar {
            background: #007aff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            color: white;
        }

        .post-content {
            flex: 1;
            min-width: 0;
        }

        .post-header {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 6px 12px;
            margin-bottom: 6px;
        }

        .post-name {
            font-weight: 600;
            font-size: 15px;
            color: #1a1a2e;
        }

        .post-location {
            font-size: 12px;
            color: #8e95a3;
            background: #f1f3f6;
            padding: 2px 10px;
            border-radius: 20px;
        }

        .post-time {
            font-size: 12px;
            color: #8e95a3;
            margin-left: auto;
            flex-shrink: 0;
        }

        .post-text {
            font-size: 15px;
            line-height: 1.5;
            color: #1a1a2e;
            margin-bottom: 10px;
            word-wrap: break-word;
        }

        .post-images {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 6px;
        }

        .post-img {
            max-width: 100%;
            max-height: 260px;
            border-radius: 14px;
            border: 1px solid #eef2f6;
            object-fit: cover;
            box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }

        .user-post {
            background: #e8f4ff;
            border-color: #b8d9ff;
        }

        .typing-indicator {
            display: none;
            align-items: center;
            gap: 12px;
            padding: 14px 20px;
            background: #ffffff;
            border-radius: 20px;
            max-width: 300px;
            border: 1px solid #eef2f6;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
            margin: 8px 0 0 62px;
            animation: fadeUp 0.3s ease;
        }

        .typing-dots {
            display: flex;
            gap: 4px;
        }

        .typing-dots span {
            width: 8px;
            height: 8px;
            background: #8e95a3;
            border-radius: 50%;
            animation: dotBounce 1.4s infinite both;
        }

        .typing-dots span:nth-child(2) { animation-delay: 0.2s; }
        .typing-dots span:nth-child(3) { animation-delay: 0.4s; }

        @keyframes dotBounce {
            0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
            40% { transform: scale(1); opacity: 1; }
        }

        .typing-name {
            font-size: 14px;
            color: #6b7280;
            font-weight: 500;
        }

        .ai-chat-float {
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            width: 400px;
            max-width: 94vw;
            display: flex;
            align-items: center;
            gap: 6px;
            background: #ffffff;
            padding: 6px 6px 6px 2px;
            border-radius: 50px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18), 0 2px 8px rgba(0, 0, 0, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.5);
            backdrop-filter: blur(8px);
            z-index: 99999;
            user-select: none;
            -webkit-user-select: none;
            touch-action: none;
        }

        .drag-handle {
            padding: 14px 12px;
            font-size: 22px;
            line-height: 1;
            color: #aaa;
            cursor: grab;
            touch-action: none;
            border-radius: 50%;
            background: transparent;
            flex-shrink: 0;
            letter-spacing: -2px;
        }

        .drag-handle:active {
            cursor: grabbing;
            background: rgba(0, 0, 0, 0.05);
        }

        .drag-handle span {
            display: block;
            transform: rotate(90deg);
        }

        .chat-input-wrapper {
            flex: 1;
            display: flex;
            align-items: center;
            gap: 4px;
            min-width: 0;
        }

        #aiChatInput {
            flex: 1;
            min-width: 60px;
            padding: 12px 16px;
            border: none;
            border-radius: 30px;
            background: #f5f7fa;
            font-size: 15px;
            outline: none;
            color: #1a1a2e;
            touch-action: manipulation;
        }

        #aiChatInput::placeholder {
            color: #999;
            font-weight: 400;
        }

        #aiSendBtn {
            width: 46px;
            height: 46px;
            border: none;
            border-radius: 50%;
            background: #007aff;
            color: white;
            font-size: 20px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            touch-action: manipulation;
            box-shadow: 0 4px 12px rgba(0, 122, 255, 0.3);
            transition: transform 0.15s ease, background 0.2s;
        }

        #aiSendBtn:active {
            transform: scale(0.90);
            background: #005bbf;
        }

        @media (max-width: 600px) {
            .ai-chat-float {
                width: 96vw;
                bottom: 16px;
                padding: 4px 4px 4px 2px;
                border-radius: 40px;
            }
            .drag-handle {
                padding: 16px 12px;
                font-size: 24px;
            }
            #aiChatInput {
                font-size: 16px;
                padding: 14px 16px;
            }
            .post-avatar {
                width: 40px;
                height: 40px;
            }
            .typing-indicator {
                margin-left: 52px;
                max-width: 240px;
            }
            body {
                padding: 12px;
                padding-bottom: 100px;
            }
        }

        @media (max-width: 430px) {
            .post-text {
                font-size: 14px;
            }
            .post-img {
                max-height: 180px;
            }
            .community-post {
                padding: 14px 16px;
            }
        }
    </style>
</head>
<body>

    <div class="community-header">
        <h1>💬 Community Hub</h1>
        <span class="member-count">👥 60 members</span>
    </div>

    <div id="communityFeed"></div>

    <div id="typingIndicator" class="typing-indicator"></div>

    <div id="floatingChatBar" class="ai-chat-float">
        <div class="drag-handle" id="dragHandle">
            <span>⠿</span>
        </div>
        <div class="chat-input-wrapper">
            <input type="text" id="aiChatInput" placeholder="Ask the community anything..." />
            <button id="aiSendBtn">➤</button>
        </div>
    </div>

    <script src="community.js"></script>
</body>
</html>
