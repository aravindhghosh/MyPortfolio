import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const GameCard = ({ title, description, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="text-left p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 hover:border-blue-300 hover:shadow-lg transition-all duration-200"
  >
    <div className="text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</div>
    <div className="text-sm text-slate-600 dark:text-slate-300">{description}</div>
  </button>
);

const ModalShell = ({ title, onClose, children }) => (
  <div
    className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
    onClick={onClose}
  >
    <div
      className="bg-white dark:bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in-95"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="sticky top-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-6 py-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">{title}</h2>
        <button
          type="button"
          onClick={onClose}
          className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close"
        >
          <span className="text-slate-600 dark:text-slate-300">✕</span>
        </button>
      </div>
      <div className="p-6">{children}</div>
    </div>
  </div>
);

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xNext, setXNext] = useState(true);
  const [result, setResult] = useState(null);
  const winner = useMemo(() => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a];
    }
    return null;
  }, [board]);

  const handleClick = (idx) => {
    if (board[idx] || winner) return;
    const next = [...board];
    next[idx] = xNext ? "X" : "O";
    setBoard(next);
    setXNext(!xNext);
  };

  const reset = useCallback(() => {
    setBoard(Array(9).fill(null));
    setXNext(true);
    setResult(null);
  }, []);

  useEffect(() => {
    if (winner) setResult(`Winner: ${winner}`);
    else if (board.every(Boolean)) setResult("Draw");
  }, [winner, board]);

  const status = winner ? `Winner: ${winner}` : board.every(Boolean) ? "Draw" : `Next: ${xNext ? "X" : "O"}`;

  return (
    <div className="space-y-4">
      <div className="text-slate-700 dark:text-slate-300">{status}</div>
      <div className="grid grid-cols-3 gap-2 w-full max-w-xs">
        {board.map((cell, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleClick(idx)}
            className="h-20 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-2xl font-bold text-slate-900 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            {cell}
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={reset}
        className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
      >
        Reset
      </button>
      {result && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-xl px-6 py-4 border border-slate-200 dark:border-slate-700 shadow-xl animate-in fade-in zoom-in-95">
            <div className="text-slate-900 dark:text-slate-100 font-semibold">
              {result}
            </div>
            <button
              type="button"
              onClick={reset}
              className="mt-3 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const MEMORY_ICONS = ["🍎", "🍌", "🍇", "🍉", "🍓", "🍒", "🥝", "🍍"];

const MemoryMatch = () => {
  const [deck, setDeck] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState(new Set());
  const [won, setWon] = useState(false);

  const reset = useCallback(() => {
    const cards = [...MEMORY_ICONS, ...MEMORY_ICONS]
      .map((value, id) => ({ id: `${value}-${id}`, value }))
      .sort(() => Math.random() - 0.5);
    setDeck(cards);
    setFlipped([]);
    setMatched(new Set());
    setWon(false);
  }, []);

  useEffect(() => {
    reset();
  }, [reset]);

  const handleFlip = (idx) => {
    if (flipped.includes(idx) || matched.has(deck[idx]?.id)) return;
    if (flipped.length === 2) return;
    const next = [...flipped, idx];
    setFlipped(next);
    if (next.length === 2) {
      const [a, b] = next;
      if (deck[a].value === deck[b].value) {
        setMatched((prev) => new Set(prev).add(deck[a].id).add(deck[b].id));
        setTimeout(() => setFlipped([]), 300);
      } else {
        setTimeout(() => setFlipped([]), 700);
      }
    }
  };

  useEffect(() => {
    if (deck.length > 0 && matched.size === deck.length) setWon(true);
  }, [matched, deck]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-2 max-w-md">
        {deck.map((card, idx) => {
          const isOpen = flipped.includes(idx) || matched.has(card.id);
          return (
            <button
              key={card.id}
              type="button"
              onClick={() => handleFlip(idx)}
              className="h-16 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-2xl"
            >
              {isOpen ? card.value : "❓"}
            </button>
          );
        })}
      </div>
      <button
        type="button"
        onClick={reset}
        className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
      >
        Shuffle
      </button>
      {won && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-xl px-6 py-4 border border-slate-200 dark:border-slate-700 shadow-xl animate-in fade-in zoom-in-95">
            <div className="text-slate-900 dark:text-slate-100 font-semibold">
              You Win!
            </div>
            <button
              type="button"
              onClick={reset}
              className="mt-3 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const useSwipeControls = (onSwipe) => {
  const startRef = useRef(null);

  const onPointerDown = (e) => {
    startRef.current = { x: e.clientX, y: e.clientY };
  };

  const onPointerUp = (e) => {
    if (!startRef.current) return;
    const dx = e.clientX - startRef.current.x;
    const dy = e.clientY - startRef.current.y;
    const absX = Math.abs(dx);
    const absY = Math.abs(dy);
    const threshold = 24;
    if (Math.max(absX, absY) < threshold) return;
    if (absX > absY) onSwipe(dx > 0 ? "right" : "left");
    else onSwipe(dy > 0 ? "down" : "up");
    startRef.current = null;
  };

  return { onPointerDown, onPointerUp };
};

const Snake = () => {
  const size = 16;
  const [snake, setSnake] = useState([{ x: 7, y: 7 }]);
  const [dir, setDir] = useState({ x: 1, y: 0 });
  const [food, setFood] = useState({ x: 3, y: 4 });
  const [running, setRunning] = useState(false);
  const [lost, setLost] = useState(false);

  const reset = useCallback(() => {
    setSnake([{ x: 7, y: 7 }]);
    setDir({ x: 1, y: 0 });
    setFood({ x: 3, y: 4 });
    setRunning(false);
    setLost(false);
  }, []);

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      setSnake((prev) => {
        const head = { x: (prev[0].x + dir.x + size) % size, y: (prev[0].y + dir.y + size) % size };
        const hitSelf = prev.some((p) => p.x === head.x && p.y === head.y);
        if (hitSelf) {
          setRunning(false);
          setLost(true);
          return prev;
        }
        const next = [head, ...prev];
        if (head.x === food.x && head.y === food.y) {
          let newFood = food;
          while (next.some((p) => p.x === newFood.x && p.y === newFood.y)) {
            newFood = { x: Math.floor(Math.random() * size), y: Math.floor(Math.random() * size) };
          }
          setFood(newFood);
          return next;
        }
        next.pop();
        return next;
      });
    }, 140);
    return () => clearInterval(interval);
  }, [running, dir, food]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowUp" && dir.y !== 1) setDir({ x: 0, y: -1 });
      if (e.key === "ArrowDown" && dir.y !== -1) setDir({ x: 0, y: 1 });
      if (e.key === "ArrowLeft" && dir.x !== 1) setDir({ x: -1, y: 0 });
      if (e.key === "ArrowRight" && dir.x !== -1) setDir({ x: 1, y: 0 });
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [dir]);

  const swipe = useSwipeControls((direction) => {
    if (direction === "up" && dir.y !== 1) setDir({ x: 0, y: -1 });
    if (direction === "down" && dir.y !== -1) setDir({ x: 0, y: 1 });
    if (direction === "left" && dir.x !== 1) setDir({ x: -1, y: 0 });
    if (direction === "right" && dir.x !== -1) setDir({ x: 1, y: 0 });
  });

  return (
    <div className="space-y-4">
      <div
        className="grid grid-cols-16 gap-1 touch-none"
        style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}
        {...swipe}
      >
        {Array.from({ length: size * size }).map((_, idx) => {
          const x = idx % size;
          const y = Math.floor(idx / size);
          const isSnake = snake.some((p) => p.x === x && p.y === y);
          const isFood = food.x === x && food.y === y;
          const cls = isFood
            ? "bg-red-500"
            : isSnake
              ? "bg-emerald-500"
              : "bg-slate-100 dark:bg-slate-800";
          return <div key={idx} className={`aspect-square rounded ${cls}`} />;
        })}
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setRunning((r) => !r)}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          {running ? "Pause" : "Start"}
        </button>
        <button
          type="button"
          onClick={reset}
          className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
        >
          Reset
        </button>
      </div>
      {lost && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-xl px-6 py-4 border border-slate-200 dark:border-slate-700 shadow-xl animate-in fade-in zoom-in-95">
            <div className="text-slate-900 dark:text-slate-100 font-semibold">
              Game Over
            </div>
            <button
              type="button"
              onClick={reset}
              className="mt-3 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const TwentyFortyEight = () => {
  const size = 4;
  const [grid, setGrid] = useState(() => Array.from({ length: size }, () => Array(size).fill(0)));
  const [score, setScore] = useState(0);
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);

  const addRandom = useCallback((g) => {
    const empty = [];
    for (let r = 0; r < size; r += 1) {
      for (let c = 0; c < size; c += 1) {
        if (g[r][c] === 0) empty.push([r, c]);
      }
    }
    if (empty.length === 0) return g;
    const [r, c] = empty[Math.floor(Math.random() * empty.length)];
    const val = Math.random() < 0.9 ? 2 : 4;
    const next = g.map((row) => [...row]);
    next[r][c] = val;
    return next;
  }, [size]);

  const reset = useCallback(() => {
    let g = Array.from({ length: size }, () => Array(size).fill(0));
    g = addRandom(addRandom(g));
    setGrid(g);
    setScore(0);
    setWon(false);
    setLost(false);
  }, [addRandom, size]);

  useEffect(() => reset(), [reset]);

  const move = useCallback((dir) => {
    let moved = false;
    let gained = 0;
    const rotate = (g) => g[0].map((_, i) => g.map((row) => row[i]).reverse());
    const unrotate = (g) => g[0].map((_, i) => g.map((row) => row[row.length - 1 - i]));
    let g = grid.map((row) => [...row]);

    const rot = (times) => {
      for (let i = 0; i < times; i += 1) g = rotate(g);
    };
    const unrot = (times) => {
      for (let i = 0; i < times; i += 1) g = unrotate(g);
    };

    const rotateTimes = { left: 0, up: 3, right: 2, down: 1 }[dir];
    rot(rotateTimes);

    g = g.map((row) => {
      const filtered = row.filter(Boolean);
      for (let i = 0; i < filtered.length - 1; i += 1) {
        if (filtered[i] === filtered[i + 1]) {
          filtered[i] *= 2;
          gained += filtered[i];
          filtered[i + 1] = 0;
        }
      }
      const merged = filtered.filter(Boolean);
      while (merged.length < size) merged.push(0);
      if (merged.some((v, i) => v !== row[i])) moved = true;
      return merged;
    });

    unrot(rotateTimes);
    if (moved) {
      const next = addRandom(g);
      setGrid(next);
      setScore((s) => s + gained);
    }
  }, [addRandom, grid]);

  useEffect(() => {
    const handleKey = (e) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) e.preventDefault();
      if (e.key === "ArrowUp") move("up");
      if (e.key === "ArrowDown") move("down");
      if (e.key === "ArrowLeft") move("left");
      if (e.key === "ArrowRight") move("right");
    };
    window.addEventListener("keydown", handleKey, { passive: false });
    return () => window.removeEventListener("keydown", handleKey);
  }, [move]);

  useEffect(() => {
    if (grid.flat().some((v) => v === 2048)) setWon(true);
    const hasEmpty = grid.flat().some((v) => v === 0);
    const canMerge = () => {
      for (let r = 0; r < size; r += 1) {
        for (let c = 0; c < size; c += 1) {
          const v = grid[r][c];
          if ((grid[r + 1]?.[c] ?? -1) === v) return true;
          if ((grid[r]?.[c + 1] ?? -1) === v) return true;
        }
      }
      return false;
    };
    if (!hasEmpty && !canMerge()) setLost(true);
  }, [grid]);

  const swipeHandlers = useSwipeControls((direction) => {
    if (direction === "up") move("up");
    if (direction === "down") move("down");
    if (direction === "left") move("left");
    if (direction === "right") move("right");
  });

  return (
    <div className="space-y-4">
      <div className="text-slate-700 dark:text-slate-300">Score: {score}</div>
      <div
        className="grid grid-cols-4 gap-2 max-w-xs touch-none"
        {...swipeHandlers}
      >
        {grid.flat().map((val, idx) => (
          <div
            key={idx}
            className="h-16 rounded-lg flex items-center justify-center font-bold text-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          >
            {val !== 0 ? val : ""}
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={reset}
        className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
      >
        Reset
      </button>
      {won && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-xl px-6 py-4 border border-slate-200 dark:border-slate-700 shadow-xl animate-in fade-in zoom-in-95">
            <div className="text-slate-900 dark:text-slate-100 font-semibold">
              You Win!
            </div>
            <button
              type="button"
              onClick={reset}
              className="mt-3 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
      {lost && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-xl px-6 py-4 border border-slate-200 dark:border-slate-700 shadow-xl animate-in fade-in zoom-in-95">
            <div className="text-slate-900 dark:text-slate-100 font-semibold">
              Game Over
            </div>
            <button
              type="button"
              onClick={reset}
              className="mt-3 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const gameList = [
  { key: "snake", title: "Snake", description: "Classic snake with arrow keys." },
  { key: "tictactoe", title: "Tic‑Tac‑Toe", description: "Play against yourself." },
  { key: "memory", title: "Memory Match", description: "Find all the pairs." },
  { key: "2048", title: "2048", description: "Merge tiles to reach 2048." },
];

export default function GamesLauncher({ unlocked }) {
  const [open, setOpen] = useState(false);
  const [activeGame, setActiveGame] = useState(null);
  const [instanceKey, setInstanceKey] = useState(0);
  const [pos, setPos] = useState({ x: 20, y: 120 });
  const draggingRef = useRef(false);
  const offsetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!unlocked) return;
    const width = window.innerWidth;
    const height = window.innerHeight;
    setPos({ x: width - 76, y: height - 180 });
  }, [unlocked]);

  useEffect(() => {
    if (!unlocked) {
      setOpen(false);
      setActiveGame(null);
      setInstanceKey((k) => k + 1);
    }
  }, [unlocked]);

  useEffect(() => {
    const handleMove = (e) => {
      if (!draggingRef.current) return;
      const x = clamp(e.clientX - offsetRef.current.x, 8, window.innerWidth - 64);
      const y = clamp(e.clientY - offsetRef.current.y, 8, window.innerHeight - 64);
      setPos({ x, y });
    };
    const handleUp = () => {
      draggingRef.current = false;
    };
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
    };
  }, []);

  if (!unlocked) return null;

  const openGame = (key) => {
    setActiveGame(key);
  };

  return (
    <>
      <button
        type="button"
        onPointerDown={(e) => {
          draggingRef.current = true;
          offsetRef.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
        }}
        onClick={() => setOpen(true)}
        className="fixed z-[55] w-14 h-14 rounded-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center"
        style={{ left: pos.x, top: pos.y }}
        aria-label="Open games"
        title="Open games"
      >
        <span className="text-xl">🎮</span>
      </button>

      {open && (
        <ModalShell
          title="Mini Games"
          onClose={() => {
            setOpen(false);
            setActiveGame(null);
            setInstanceKey((k) => k + 1);
          }}
        >
          {!activeGame && (
            <div className="grid md:grid-cols-2 gap-4">
              {gameList.map((g) => (
                <GameCard
                  key={g.key}
                  title={g.title}
                  description={g.description}
                  onClick={() => openGame(g.key)}
                />
              ))}
            </div>
          )}

          {activeGame && (
            <div className="space-y-4" key={instanceKey}>
              <div className="flex items-center justify-between">
                <div className="text-slate-700 dark:text-slate-300">Use arrow keys for Snake and 2048.</div>
                <button
                  type="button"
                  onClick={() => {
                    setActiveGame(null);
                    setInstanceKey((k) => k + 1);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                >
                  Back
                </button>
              </div>
              {activeGame === "snake" && <Snake />}
              {activeGame === "tictactoe" && <TicTacToe />}
              {activeGame === "memory" && <MemoryMatch />}
              {activeGame === "2048" && <TwentyFortyEight />}
            </div>
          )}
        </ModalShell>
      )}
    </>
  );
}
