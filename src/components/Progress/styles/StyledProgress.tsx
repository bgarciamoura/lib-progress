import { styled } from "styled-components";

const StyledProgress = styled.div`
  .progress {
    height: 1rem;
    overflow: hidden;
    font-size: 0.75rem;
    background-color: #e9ecef;
    border-radius: 0.25rem;
  }

  .primary {
    background-color: #007bff;
  }

  .secondary {
    background-color: #6c757d;
  }

  .success {
    background-color: #28a745;
  }
  .danger {
    background-color: #dc3545;
  }
  .warning {
    background-color: #ffc107;
  }
  .info {
    background-color: #17a2b8;
  }
  .light {
    background-color: #f8f9fa;
  }
  .dark {
    background-color: #343a40;
  }

  .progress-bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    transition: width 0.6s ease;
  }

  .progress-bar-striped {
    background-image: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.15) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.15) 50%,
      rgba(255, 255, 255, 0.15) 75%,
      transparent 75%,
      transparent
    );
    background-size: 1rem 1rem;
  }

  .progress-bar-animated {
    animation: progress-bar-stripes 1s linear infinite;
  }

  @keyframes progress-bar-stripes {
    from {
      background-position-x: 1rem;
    }
    to {
      background-position-x: 0;
    }
  }
`;

export { StyledProgress };
