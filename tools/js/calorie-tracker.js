// Food Database with detailed nutrition information
const indianFoodDatabase = [
    // 🌾 Grains & Staples
    {
        id: 1,
        name: "Chapati (Wheat)",
        serving: "1 medium (6 inch)",
        calories: 71,
        protein: 3.1,
        carbs: 15.6,
        fat: 0.4,
        fiber: 2.8,
        category: "🌾 Grains"
    },
    {
        id: 9,
        name: "Basmati Rice (Cooked)",
        serving: "1 cup (150g)",
        calories: 210,
        protein: 4.3,
        carbs: 45.0,
        fat: 0.4,
        fiber: 0.6,
        category: "🌾 Grains"
    },
    
    // 🥬 Vegetables
    {
        id: 2,
        name: "Bowl Sabji (Mixed Vegetables)",
        serving: "1 bowl (150g)",
        calories: 85,
        protein: 3.2,
        carbs: 12.5,
        fat: 3.1,
        fiber: 4.2,
        category: "🥬 Vegetables"
    },
    {
        id: 5,
        name: "Tomato",
        serving: "100g",
        calories: 18,
        protein: 0.9,
        carbs: 3.9,
        fat: 0.2,
        fiber: 1.2,
        category: "🥬 Vegetables"
    },
    {
        id: 6,
        name: "Potato",
        serving: "100g",
        calories: 77,
        protein: 2.0,
        carbs: 17.5,
        fat: 0.1,
        fiber: 2.2,
        category: "🥬 Vegetables"
    },
    {
        id: 7,
        name: "Onion",
        serving: "100g",
        calories: 40,
        protein: 1.1,
        carbs: 9.3,
        fat: 0.1,
        fiber: 1.7,
        category: "🥬 Vegetables"
    },
    {
        id: 8,
        name: "Cucumber",
        serving: "100g",
        calories: 16,
        protein: 0.7,
        carbs: 3.6,
        fat: 0.1,
        fiber: 0.5,
        category: "🥬 Vegetables"
    },
    {
        id: 14,
        name: "Palak (Spinach)",
        serving: "100g",
        calories: 23,
        protein: 2.9,
        carbs: 3.6,
        fat: 0.4,
        fiber: 2.2,
        category: "🥬 Vegetables"
    },
    {
        id: 15,
        name: "Cauliflower",
        serving: "100g",
        calories: 25,
        protein: 1.9,
        carbs: 5.0,
        fat: 0.3,
        fiber: 2.0,
        category: "🥬 Vegetables"
    },
    {
        id: 16,
        name: "Okra (Bhindi)",
        serving: "100g",
        calories: 33,
        protein: 1.9,
        carbs: 7.5,
        fat: 0.2,
        fiber: 3.2,
        category: "🥬 Vegetables"
    },
    {
        id: 17,
        name: "Green Beans",
        serving: "100g",
        calories: 31,
        protein: 1.8,
        carbs: 7.1,
        fat: 0.2,
        fiber: 2.7,
        category: "🥬 Vegetables"
    },
    {
        id: 18,
        name: "Carrots",
        serving: "100g",
        calories: 41,
        protein: 0.9,
        carbs: 9.6,
        fat: 0.2,
        fiber: 2.8,
        category: "🥬 Vegetables"
    },
    
    // 🥛 Dairy Products
    {
        id: 3,
        name: "Curd (Yogurt)",
        serving: "100g",
        calories: 60,
        protein: 3.5,
        carbs: 4.7,
        fat: 3.2,
        fiber: 0,
        category: "🥛 Dairy"
    },
    {
        id: 4,
        name: "Milk (Whole)",
        serving: "100ml",
        calories: 67,
        protein: 3.2,
        carbs: 5.1,
        fat: 3.9,
        fiber: 0,
        category: "🥛 Dairy"
    },
    {
        id: 11,
        name: "Paneer",
        serving: "100g",
        calories: 265,
        protein: 18.3,
        carbs: 1.2,
        fat: 20.8,
        fiber: 0,
        category: "🥛 Dairy"
    },
    
    // 🫘 Legumes
    {
        id: 10,
        name: "Dal (Lentils)",
        serving: "1 bowl (100g)",
        calories: 116,
        protein: 9.0,
        carbs: 20.1,
        fat: 0.4,
        fiber: 7.9,
        category: "🫘 Legumes"
    },
    
    // 🍎 Fruits
    {
        id: 19,
        name: "Banana",
        serving: "1 medium (120g)",
        calories: 105,
        protein: 1.3,
        carbs: 27.0,
        fat: 0.4,
        fiber: 3.1,
        category: "🍎 Fruits"
    },
    {
        id: 20,
        name: "Apple",
        serving: "1 medium (180g)",
        calories: 95,
        protein: 0.5,
        carbs: 25.1,
        fat: 0.3,
        fiber: 4.4,
        category: "🍎 Fruits"
    },
    {
        id: 21,
        name: "Mango",
        serving: "100g",
        calories: 60,
        protein: 0.8,
        carbs: 15.0,
        fat: 0.4,
        fiber: 1.6,
        category: "🍎 Fruits"
    },
    
    // 🛢️ Healthy Oils
    {
        id: 22,
        name: "Coconut Oil",
        serving: "1 tablespoon (15ml)",
        calories: 120,
        protein: 0,
        carbs: 0,
        fat: 14.0,
        fiber: 0,
        category: "🛢️ Oils"
    },
    {
        id: 23,
        name: "Ghee",
        serving: "1 tablespoon (15ml)",
        calories: 135,
        protein: 0,
        carbs: 0,
        fat: 15.0,
        fiber: 0,
        category: "🛢️ Oils"
    },
    
    // 🌰 Dry Fruits & Nuts (10g servings)
    {
        id: 24,
        name: "Almonds",
        serving: "10g",
        calories: 57,
        protein: 2.1,
        carbs: 2.2,
        fat: 4.9,
        fiber: 1.2,
        category: "🌰 Dry Fruits"
    },
    {
        id: 25,
        name: "Cashews",
        serving: "10g",
        calories: 55,
        protein: 1.8,
        carbs: 3.0,
        fat: 4.4,
        fiber: 0.3,
        category: "🌰 Dry Fruits"
    },
    {
        id: 26,
        name: "Walnuts",
        serving: "10g",
        calories: 65,
        protein: 1.5,
        carbs: 1.4,
        fat: 6.5,
        fiber: 0.7,
        category: "🌰 Dry Fruits"
    },
    {
        id: 27,
        name: "Pistachios",
        serving: "10g",
        calories: 56,
        protein: 2.0,
        carbs: 2.8,
        fat: 4.5,
        fiber: 1.0,
        category: "🌰 Dry Fruits"
    },
    {
        id: 28,
        name: "Dates (Khajur)",
        serving: "10g",
        calories: 28,
        protein: 0.2,
        carbs: 7.5,
        fat: 0.0,
        fiber: 0.7,
        category: "🌰 Dry Fruits"
    },
    {
        id: 29,
        name: "Raisins (Kishmish)",
        serving: "10g",
        calories: 30,
        protein: 0.3,
        carbs: 7.9,
        fat: 0.0,
        fiber: 0.1,
        category: "🌰 Dry Fruits"
    },
    {
        id: 30,
        name: "Figs (Anjeer)",
        serving: "10g",
        calories: 25,
        protein: 0.8,
        carbs: 6.4,
        fat: 0.1,
        fiber: 0.3,
        category: "🌰 Dry Fruits"
    },
    {
        id: 31,
        name: "Apricots (Khumani)",
        serving: "10g",
        calories: 24,
        protein: 0.3,
        carbs: 6.2,
        fat: 0.1,
        fiber: 0.2,
        category: "🌰 Dry Fruits"
    },
    {
        id: 32,
        name: "Brazil Nuts",
        serving: "10g",
        calories: 66,
        protein: 1.4,
        carbs: 1.2,
        fat: 6.7,
        fiber: 0.8,
        category: "🌰 Dry Fruits"
    },
    {
        id: 33,
        name: "Hazelnuts",
        serving: "10g",
        calories: 63,
        protein: 1.5,
        carbs: 1.7,
        fat: 6.1,
        fiber: 1.0,
        category: "🌰 Dry Fruits"
    },
    {
        id: 34,
        name: "Pine Nuts (Chilgoza)",
        serving: "10g",
        calories: 67,
        protein: 1.4,
        carbs: 1.3,
        fat: 6.8,
        fiber: 0.4,
        category: "🌰 Dry Fruits"
    },
    {
        id: 35,
        name: "Pumpkin Seeds",
        serving: "10g",
        calories: 56,
        protein: 3.0,
        carbs: 1.1,
        fat: 4.6,
        fiber: 0.6,
        category: "🌰 Dry Fruits"
    },
    {
        id: 36,
        name: "Sunflower Seeds",
        serving: "10g",
        calories: 58,
        protein: 2.1,
        carbs: 2.0,
        fat: 5.2,
        fiber: 0.9,
        category: "🌰 Dry Fruits"
    },
    {
        id: 37,
        name: "Munnakka (Black Raisins)",
        serving: "10g",
        calories: 30,
        protein: 0.3,
        carbs: 7.8,
        fat: 0.0,
        fiber: 0.4,
        category: "🌰 Dry Fruits"
    },
    {
        id: 38,
        name: "Oats",
        serving: "10g",
        calories: 39,
        protein: 1.4,
        carbs: 6.6,
        fat: 0.7,
        fiber: 1.1,
        category: "🌾 Grains"
    },
    {
        id: 39,
        name: "Honey",
        serving: "10g",
        calories: 30,
        protein: 0.0,
        carbs: 8.2,
        fat: 0.0,
        fiber: 0.0,
        category: "🍯 Natural Sweeteners"
    },
    {
        id: 40,
        name: "Upma",
        serving: "1 bowl (150g)",
        calories: 165,
        protein: 4.2,
        carbs: 28.5,
        fat: 4.1,
        fiber: 2.8,
        category: "🥣 Traditional Breakfast"
    },
    {
        id: 41,
        name: "Poha",
        serving: "1 bowl (150g)",
        calories: 180,
        protein: 3.8,
        carbs: 32.0,
        fat: 4.5,
        fiber: 1.8,
        category: "🥣 Traditional Breakfast"
    },
    {
        id: 42,
        name: "Ghee (Small)",
        serving: "10g",
        calories: 90,
        protein: 0.0,
        carbs: 0.0,
        fat: 10.0,
        fiber: 0.0,
        category: "🛢️ Oils"
    },
    {
        id: 43,
        name: "Buttermilk",
        serving: "250ml (1 glass)",
        calories: 62,
        protein: 2.8,
        carbs: 5.2,
        fat: 3.4,
        fiber: 0.0,
        category: "🥛 Dairy"
    }
];

// Application state
let dailyIntake = [];
let filteredFoods = [];
let selectedFood = null;
let currentSortBy = 'name'; // Default sort by name

// Local storage keys
const STORAGE_KEY = 'indian-calorie-tracker';
const DATE_KEY = 'tracker-date';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadCustomFoods(); // Load custom foods first
    filteredFoods = [...indianFoodDatabase]; // Then initialize filtered foods
    loadDailyIntake();
    renderFoodDatabase();
    updateTotals();
    setupEventListeners();
});

function setupEventListeners() {
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', handleSearch);
    
    // Set initial sort
    applySort();
    
    // Close modal when clicking outside
    document.getElementById('add-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
    
    // Prevent modal from closing when clicking inside modal content
    document.querySelector('.modal-content').addEventListener('click', function(e) {
        e.stopPropagation();
    });
}

function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    
    if (searchTerm === '') {
        filteredFoods = [...indianFoodDatabase];
    } else {
        filteredFoods = indianFoodDatabase.filter(food => 
            food.name.toLowerCase().includes(searchTerm) ||
            food.category.toLowerCase().includes(searchTerm)
        );
    }
    
    applySort();
    renderFoodDatabase();
}

function handleSort() {
    const sortSelect = document.getElementById('sort-select');
    currentSortBy = sortSelect.value;
    applySort();
    renderFoodDatabase();
}

function applySort() {
    filteredFoods.sort((a, b) => {
        switch (currentSortBy) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'calories':
                return b.calories - a.calories; // High to low
            case 'protein':
                return b.protein - a.protein; // High to low
            case 'carbs':
                return b.carbs - a.carbs; // High to low
            case 'fat':
                return b.fat - a.fat; // High to low
            case 'fiber':
                return b.fiber - a.fiber; // High to low
            case 'category':
                return a.category.localeCompare(b.category);
            default:
                return 0;
        }
    });
}

function renderFoodDatabase() {
    const foodGrid = document.getElementById('food-grid');
    
    if (filteredFoods.length === 0) {
        foodGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <i class="fas fa-search"></i>
                <p>No foods found</p>
                <small>Try a different search term</small>
            </div>
        `;
        return;
    }
    
    foodGrid.innerHTML = filteredFoods.map(food => {
        // Highlight the sorted value
        const getValueClass = (key) => {
            return currentSortBy === key ? 'value highlighted' : 'value';
        };
        
        return `
        <div class="food-item" onclick="openAddModal(${food.id})" data-food-id="${food.id}">
            <h3>
                ${food.name}
                ${food.isCustom ? '<span class="custom-badge"><i class="fas fa-star"></i> Custom</span>' : ''}
            </h3>
            ${food.isCustom ? `<button class="delete-custom-btn" onclick="event.stopPropagation(); deleteCustomFood(${food.id})"><i class="fas fa-trash"></i></button>` : ''}
            <div class="serving">${food.serving}</div>
            <div class="nutrition-info">
                <span><span class="label">Calories:</span> <span class="${getValueClass('calories')}">${food.calories}</span></span>
                <span><span class="label">Protein:</span> <span class="${getValueClass('protein')}">${food.protein}g</span></span>
                <span><span class="label">Carbs:</span> <span class="${getValueClass('carbs')}">${food.carbs}g</span></span>
                <span><span class="label">Fat:</span> <span class="${getValueClass('fat')}">${food.fat}g</span></span>
                <span><span class="label">Fiber:</span> <span class="${getValueClass('fiber')}">${food.fiber}g</span></span>
                <span><span class="label">Category:</span> <span class="${getValueClass('category')}">${food.category}</span></span>
            </div>
        </div>
    `;
    }).join('');
}

function openAddModal(foodId) {
    selectedFood = indianFoodDatabase.find(food => food.id === foodId);
    if (!selectedFood) return;
    
    const modal = document.getElementById('add-modal');
    const modalTitle = document.getElementById('modal-title');
    const foodInfo = document.getElementById('food-info');
    const quantityInput = document.getElementById('quantity');
    
    modalTitle.textContent = `Add ${selectedFood.name}`;
    
    foodInfo.innerHTML = `
        <h4>${selectedFood.name}</h4>
        <div class="serving">Per ${selectedFood.serving}</div>
        <div class="nutrition-info">
            <span><span class="label">Calories:</span> <span class="value">${selectedFood.calories}</span></span>
            <span><span class="label">Protein:</span> <span class="value">${selectedFood.protein}g</span></span>
            <span><span class="label">Carbs:</span> <span class="value">${selectedFood.carbs}g</span></span>
            <span><span class="label">Fat:</span> <span class="value">${selectedFood.fat}g</span></span>
            <span><span class="label">Fiber:</span> <span class="value">${selectedFood.fiber}g</span></span>
        </div>
    `;
    
    quantityInput.value = 1;
    updateCalculatedNutrition();
    
    modal.classList.add('active');
    quantityInput.focus();
}

function closeModal() {
    document.getElementById('add-modal').classList.remove('active');
    selectedFood = null;
}

function adjustQuantity(change) {
    const quantityInput = document.getElementById('quantity');
    let currentValue = parseFloat(quantityInput.value) || 0;
    let newValue = Math.max(0.1, currentValue + change);
    
    // Round to 1 decimal place
    newValue = Math.round(newValue * 10) / 10;
    
    quantityInput.value = newValue;
    updateCalculatedNutrition();
}

function updateCalculatedNutrition() {
    if (!selectedFood) return;
    
    const quantity = parseFloat(document.getElementById('quantity').value) || 0;
    const calculatedNutrition = document.getElementById('calculated-nutrition');
    
    const calories = Math.round(selectedFood.calories * quantity);
    const protein = Math.round(selectedFood.protein * quantity * 10) / 10;
    const carbs = Math.round(selectedFood.carbs * quantity * 10) / 10;
    const fat = Math.round(selectedFood.fat * quantity * 10) / 10;
    const fiber = Math.round(selectedFood.fiber * quantity * 10) / 10;
    
    calculatedNutrition.innerHTML = `
        <h5>Calculated Nutrition (${quantity}x serving)</h5>
        <div class="nutrition-info">
            <span><span class="label">Calories:</span> <span class="value">${calories}</span></span>
            <span><span class="label">Protein:</span> <span class="value">${protein}g</span></span>
            <span><span class="label">Carbs:</span> <span class="value">${carbs}g</span></span>
            <span><span class="label">Fat:</span> <span class="value">${fat}g</span></span>
            <span><span class="label">Fiber:</span> <span class="value">${fiber}g</span></span>
        </div>
    `;
}

// Update calculated nutrition when quantity changes
document.addEventListener('DOMContentLoaded', function() {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput) {
        quantityInput.addEventListener('input', updateCalculatedNutrition);
    }
});

function addToIntake() {
    if (!selectedFood) return;
    
    const quantity = parseFloat(document.getElementById('quantity').value) || 0;
    if (quantity <= 0) {
        showToast('⚠️ Please enter a valid quantity greater than 0', 'error');
        return;
    }
    
    const intakeItem = {
        id: Date.now(), // Simple ID generation
        foodId: selectedFood.id,
        name: selectedFood.name,
        serving: selectedFood.serving,
        quantity: quantity,
        calories: Math.round(selectedFood.calories * quantity),
        protein: Math.round(selectedFood.protein * quantity * 10) / 10,
        carbs: Math.round(selectedFood.carbs * quantity * 10) / 10,
        fat: Math.round(selectedFood.fat * quantity * 10) / 10,
        fiber: Math.round(selectedFood.fiber * quantity * 10) / 10,
        timestamp: new Date().toISOString()
    };
    
    dailyIntake.push(intakeItem);
    saveDailyIntake();
    renderIntakeList();
    updateTotals();
    closeModal();
    
    // Show success message with enhanced notification
    showToast(`✓ Added ${quantity}x ${selectedFood.name} to your daily intake!`, 'success');
}

function renderIntakeList() {
    const intakeList = document.getElementById('intake-list');
    
    if (dailyIntake.length === 0) {
        intakeList.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-plate-wheat"></i>
                <p>No items added yet</p>
                <small>Start adding foods from the database</small>
            </div>
        `;
        return;
    }
    
    intakeList.innerHTML = dailyIntake.map(item => `
        <div class="intake-item">
            <div class="intake-header">
                <h4>${item.name}</h4>
                <button class="remove-btn" onclick="removeFromIntake(${item.id})">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="intake-details">
                ${item.quantity}x ${item.serving}
            </div>
            <div class="intake-nutrition">
                <span>${item.calories} cal</span>
                <span>${item.protein}g protein</span>
                <span>${item.carbs}g carbs</span>
                <span>${item.fat}g fat</span>
                <span>${item.fiber}g fiber</span>
            </div>
        </div>
    `).join('');
}

function removeFromIntake(itemId) {
    const itemIndex = dailyIntake.findIndex(item => item.id === itemId);
    if (itemIndex > -1) {
        const removedItem = dailyIntake[itemIndex];
        dailyIntake.splice(itemIndex, 1);
        saveDailyIntake();
        renderIntakeList();
        updateTotals();
        
        showToast(`🗑️ Removed ${removedItem.name} from your daily intake`, 'info');
    }
}

function updateTotals() {
    const totals = dailyIntake.reduce((acc, item) => {
        acc.calories += item.calories;
        acc.protein += item.protein;
        acc.carbs += item.carbs;
        acc.fat += item.fat;
        acc.fiber += item.fiber;
        return acc;
    }, { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 });
    
    document.getElementById('total-calories').textContent = Math.round(totals.calories);
    document.getElementById('total-protein').textContent = Math.round(totals.protein * 10) / 10;
    document.getElementById('total-carbs').textContent = Math.round(totals.carbs * 10) / 10;
    document.getElementById('total-fat').textContent = Math.round(totals.fat * 10) / 10;
    document.getElementById('total-fiber').textContent = Math.round(totals.fiber * 10) / 10;
}

function resetDay() {
    if (dailyIntake.length === 0) {
        showToast('⚠️ No items to reset', 'info');
        return;
    }
    
    if (confirm('Are you sure you want to reset today\'s intake? This action cannot be undone.')) {
        dailyIntake = [];
        saveDailyIntake();
        renderIntakeList();
        updateTotals();
        showToast('🔄 Daily intake has been reset', 'success');
    }
}

// Local Storage Functions
function saveDailyIntake() {
    const today = new Date().toDateString();
    const data = {
        date: today,
        intake: dailyIntake
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    localStorage.setItem(DATE_KEY, today);
}

function loadDailyIntake() {
    const today = new Date().toDateString();
    const savedDate = localStorage.getItem(DATE_KEY);
    
    // If it's a new day, start fresh
    if (savedDate !== today) {
        dailyIntake = [];
        saveDailyIntake();
        return;
    }
    
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        try {
            const data = JSON.parse(savedData);
            if (data.date === today && Array.isArray(data.intake)) {
                dailyIntake = data.intake;
            }
        } catch (error) {
            console.error('Error loading saved data:', error);
            dailyIntake = [];
        }
    }
    
    renderIntakeList();
}

// Enhanced toast notification function
function showToast(message, type = 'success') {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 400);
    }, 3000);
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Close modal with Escape key
    if (e.key === 'Escape') {
        closeModal();
        closeCustomFoodModal();
    }
    
    // Add item with Enter key when modal is open
    if (e.key === 'Enter' && document.getElementById('add-modal').classList.contains('active')) {
        addToIntake();
    }
});

// Export functionality for future use
function exportDailyIntake() {
    const today = new Date().toDateString();
    const totals = dailyIntake.reduce((acc, item) => {
        acc.calories += item.calories;
        acc.protein += item.protein;
        acc.carbs += item.carbs;
        acc.fat += item.fat;
        acc.fiber += item.fiber;
        return acc;
    }, { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 });
    
    const exportData = {
        date: today,
        summary: totals,
        items: dailyIntake
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `calorie-intake-${today.replace(/\s+/g, '-')}.json`;
    link.click();
}

// Custom Food Management
let customFoods = JSON.parse(localStorage.getItem('customFoods') || '[]');

function openCustomFoodModal() {
    document.getElementById('custom-food-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCustomFoodModal() {
    document.getElementById('custom-food-modal').classList.remove('active');
    document.body.style.overflow = 'auto';
    document.getElementById('custom-food-form').reset();
}

function saveCustomFood(event) {
    event.preventDefault();
    
    const customFood = {
        id: Date.now(),
        name: document.getElementById('custom-name').value.trim(),
        emoji: document.getElementById('custom-emoji').value.trim() || '🍽️',
        category: document.getElementById('custom-category').value,
        serving: document.getElementById('custom-serving').value + 'g',
        calories: parseFloat(document.getElementById('custom-calories').value),
        protein: parseFloat(document.getElementById('custom-protein').value),
        carbs: parseFloat(document.getElementById('custom-carbs').value),
        fat: parseFloat(document.getElementById('custom-fat').value),
        fiber: parseFloat(document.getElementById('custom-fiber').value),
        isCustom: true // Flag to identify custom foods
    };
    
    // Validate nutrition values
    if (customFood.calories < 0 || customFood.protein < 0 || customFood.carbs < 0 || 
        customFood.fat < 0 || customFood.fiber < 0) {
        showToast('❌ Nutrition values cannot be negative', 'error');
        return;
    }
    
    // Add to custom foods array
    customFoods.push(customFood);
    
    // Save to localStorage
    localStorage.setItem('customFoods', JSON.stringify(customFoods));
    
    // Add to main food database
    indianFoodDatabase.push(customFood);
    
    // Update filtered foods and re-render
    filteredFoods = [...indianFoodDatabase];
    applySort();
    renderFoodDatabase();
    
    // Close modal and show success message
    closeCustomFoodModal();
    showToast(`✅ "${customFood.name}" added successfully!`, 'success');
}

function deleteCustomFood(foodId) {
    if (confirm('Are you sure you want to delete this custom food? This action cannot be undone.')) {
        // Remove from custom foods array
        customFoods = customFoods.filter(food => food.id !== foodId);
        
        // Save to localStorage
        localStorage.setItem('customFoods', JSON.stringify(customFoods));
        
        // Remove from main database
        const index = indianFoodDatabase.findIndex(food => food.id === foodId);
        if (index > -1) {
            indianFoodDatabase.splice(index, 1);
        }
        
        // Update filtered foods and re-render
        filteredFoods = [...indianFoodDatabase];
        applySort();
        renderFoodDatabase();
        
        showToast('🗑️ Custom food deleted', 'info');
    }
}

// Load custom foods on initialization
function loadCustomFoods() {
    customFoods.forEach(customFood => {
        // Check if not already in database (to avoid duplicates on page reload)
        const exists = indianFoodDatabase.find(food => food.id === customFood.id);
        if (!exists) {
            indianFoodDatabase.push(customFood);
        }
    });
}

// Make functions available globally
window.openAddModal = openAddModal;
window.closeModal = closeModal;
window.adjustQuantity = adjustQuantity;
window.addToIntake = addToIntake;
window.removeFromIntake = removeFromIntake;
window.resetDay = resetDay;
window.exportDailyIntake = exportDailyIntake;
window.handleSort = handleSort;
window.openCustomFoodModal = openCustomFoodModal;
window.closeCustomFoodModal = closeCustomFoodModal;
window.saveCustomFood = saveCustomFood;
window.deleteCustomFood = deleteCustomFood;
