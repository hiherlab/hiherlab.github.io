---
layout: default
title: Publications
nav_order: 3
---

# Publications

{% assign filtered_publications = site.pages | where_exp: "item", "item.path contains 'publications/'" | where_exp: "item", "item.year" %}
{% assign sorted_publications = filtered_publications | sort: "year" | reverse %}
{% for publication in sorted_publications %}
<div class="publication-item">
    <div class="publication-image">
        <img src="publications/pictures/{{ publication.name | replace: ".md", ".png" }}" alt="{{ publication.title }}">
    </div>
    <div class="publication-content">
        <p class="publication-title">{{ publication.title }}</p>
        <p class="publication-authors">{{ publication.author | replace: 'Yue Li', '<strong>Yue Li</strong>' }}</p>
        <p class="publication-venue">{{ publication.venue }}, {{ publication.year }}</p>
        <div class="pub-links">
            <a href="{{ publication.doi }}" class="pub-link" target="_blank">DOI</a>
            {% if publication.bibtex %}
            <a href="{{ publication.bibtex }}" class="pub-link" target="_blank">BibTeX</a>
            {% endif %}
            {% if publication.paper %}
            <a href="/docs/publications/pdf/{{ publication.paper | url_encode }}" class="pub-link" target="_blank">Paper</a>
            {% endif %}
            {% if publication.video %}
            <a href="/docs/publications/videos/{{ publication.video | url_encode }}" class="pub-link" target="_blank">Video</a>
            {% endif %}
        </div>
    </div>
</div>
<hr class="publication-divider">
{% endfor %}

<style>
    .publication-item {
        display: flex;
        margin-bottom: 15px;
        margin-top: 15px;
    }
    
    .publication-image {
        flex: 0 0 180px;
        margin-right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .publication-image img {
        width: 100%;
        height: 120px;
        max-width: 250px;
        object-fit: fit;
        border: 1px solid #ddd;
    }
    
    .publication-content {
        flex: 1;
    }
    
    .publication-title {
        font-size: 1.3rem;
        font-weight: 600;
        margin-top: 1px;
        margin-bottom: 1px;
    }
    
    .publication-authors {
        font-size: 0.9rem;
        margin-top: 5px;
        margin-bottom: 1px;
    }
    
    .publication-venue {
        font-size: 0.75rem;
        margin-top: 10px;
        margin-bottom: 1px;
        font-weight: 600;
        color: #717575;
    }
    
    .pub-links {
        margin-top: 10px;
    }
    
    .pub-link {
        display: inline-block;
        margin-right: 10px;
        padding: 5px 15px;
        background-color: white;
        color: #333;
        border: 1px solid #ccc;
        border-radius: 4px;
        text-decoration: none;
        font-size: 0.9rem;
    }
    
    .publication-divider {
        border: 0;
        height: 1px;
        background-color: #eee;
        margin: 30px 0;
    }
    
    strong {
        font-weight: bold;
    }
    
    /* 视频模态框样式 */
    .video-modal {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.8);
    }
    
    .video-modal-content {
        position: relative;
        margin: 5% auto;
        width: 80%;
        max-width: 800px;
        height: 60%;
        background-color: #000;
        border-radius: 8px;
        overflow: hidden;
    }
    
    .video-modal video {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    
    .video-close {
        position: absolute;
        top: 10px;
        right: 20px;
        color: #fff;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
        z-index: 1001;
        background: rgba(0,0,0,0.5);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .video-close:hover {
        background: rgba(0,0,0,0.8);
    }
    
    .video-link:hover {
        background-color: #f0f0f0;
    }
</style>

<!-- 视频播放模态框 -->
<div id="videoModal" class="video-modal">
    <div class="video-modal-content">
        <span class="video-close" onclick="closeVideo()">&times;</span>
        <video id="videoPlayer" controls>
            您的浏览器不支持视频播放。
        </video>
    </div>
</div>

<script>
function playVideo(videoPath) {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('videoPlayer');
    
    // 设置视频源
    video.src = '/docs/publications/videos/' + videoPath;
    
    // 显示模态框
    modal.style.display = 'block';
    
    // 播放视频
    video.play();
}

function closeVideo() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('videoPlayer');
    
    // 停止视频播放
    video.pause();
    video.src = '';
    
    // 隐藏模态框
    modal.style.display = 'none';
}

// 点击模态框外部关闭
window.onclick = function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target == modal) {
        closeVideo();
    }
}

// ESC键关闭模态框
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeVideo();
    }
});
</script>